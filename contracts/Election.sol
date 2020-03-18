pragma solidity 0.5.16;

contract Election {

    struct Candidate {
        string name;
        uint id;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;

    uint public candidateCount;

    function addCandidate(string memory _name) private {
        candidateCount++;
        candidates[candidateCount] = Candidate(_name, candidateCount, 0);
    }

    constructor () public {
        addCandidate("Martin");
        addCandidate("Rahul");
    }
}