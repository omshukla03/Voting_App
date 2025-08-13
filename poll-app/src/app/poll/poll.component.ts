import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  newPoll: Poll = {
    id: 0,
    question: '',
    options: [
      { optionText: '', voteCount: 0 },
      { optionText: '', voteCount: 0 }
    ]
  };

  polls: Poll[] = [];
  isDarkMode: boolean = false;

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    this.isDarkMode = savedTheme === 'true';

    this.loadPolls();
  }

  // Load polls from DB
  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (error) => {
        console.error('Error Fetching Polls: ', error);
      }
    });
  }

  // Create poll
  createPoll() {
    if (!this.newPoll.question.trim()) {
      alert('Please enter a poll question.');
      return;
    }

    if (this.newPoll.options.some(opt => !opt.optionText.trim())) {
      alert('Please fill in all options.');
      return;
    }

    const payload = {
      question: this.newPoll.question,
      options: this.newPoll.options
    };

    this.pollService.createPoll(payload as Poll).subscribe({
      next: () => {
        this.loadPolls();
        this.newPoll = {
          id: 0,
          question: '',
          options: [
            { optionText: '', voteCount: 0 },
            { optionText: '', voteCount: 0 }
          ]
        };
      },
      error: (error) => {
        console.error('Error Creating Poll: ', error);
      }
    });
  }

  // Vote for an option
  vote(pollId: number, optionIndex: number) {
    this.pollService.vote(pollId, optionIndex).subscribe({
      next: () => {
        const poll = this.polls.find((p) => p.id === pollId);
        if (poll) {
          poll.options[optionIndex].voteCount++;
        }
      },
      error: (error) => {
        console.error('Error Voting: ', error);
      }
    });
  }

  // Add more option inputs
  addOption() {
    this.newPoll.options.push({ optionText: '', voteCount: 0 });
  }

  // Remove option input
  removeOption(index: number) {
    if (this.newPoll.options.length > 2) {
      this.newPoll.options.splice(index, 1);
    }
  }

  // Toggle dark/light mode and save preference
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode));
  }

  // TrackBy function for *ngFor
  trackByIndex(index: number): number {
    return index;
  }
}
