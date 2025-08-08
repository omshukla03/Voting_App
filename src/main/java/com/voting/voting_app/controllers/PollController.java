package com.voting.voting_app.controllers;

import com.voting.voting_app.model.Poll;
import com.voting.voting_app.services.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polls")
public class PollController {

    private PollService pollService;

    public PollController(PollService pollService){
        this.pollService=pollService;
    }

    @PostMapping
    public Poll createPoll(@RequestBody Poll poll){
        return pollService.createPoll(poll);
    }

    @GetMapping
    public List<Poll> getAllPolls(){
            return pollService.getAllPolls();
    }
}
