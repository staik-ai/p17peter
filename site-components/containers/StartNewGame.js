import React, {Fragment} from "react";
import {Message} from "../../components/containers/Message";
import {Address} from "../Address";
import {LoginMessage, OraclizeErrorMessage, RandomNumberWaitMessage} from "../messages";
import {Button} from "../../components/Button";

export const StartNewGame = ({
    isWaitingForRandomNumber,
    oraclizeError,
    startingGame,
    gameWinner,
    metamaskAddress,
    onClick
}) =>{
    const startNewGameButton = (title) =>{
        return (
            <Button
                loading={startingGame || isWaitingForRandomNumber}
                disabled={startingGame}
                className="primary"
                onClick={onClick}
            >{title}</Button>
        );
    };

    if(isWaitingForRandomNumber){
        return (
            <Fragment>
                <RandomNumberWaitMessage/>
                {startNewGameButton("Start New Game")}
            </Fragment>
        );
    } else if(oraclizeError){
        return (
            <Fragment>
                <OraclizeErrorMessage/>
                {startNewGameButton("Start New Game")}
            </Fragment>
        );
    }

    return (gameWinner === metamaskAddress) ? (
        <div className="wrapper-4">
            <Message
                className="message-success mb-20"
                heading="Contratulations!"
            >
                <p>Congratulations! You won the game, click on the Claim Prize 
                    button to collect your HPB!</p>
            </Message>
            {startNewGameButton("Claim Prize")}
        </div>
    ) : (
        <div>
            <h3>The game has now completed</h3>
            <h4>Wallet address <Address address={gameWinner}/> was the winner!</h4>
            {(!metamaskAddress) ? (
                <LoginMessage/>
            ) : (
                <Fragment>
                    <h4>It looks like the winner hasn't claimed their prize just yet, which means a new game hasn't been generated. If you don't want to wait, you can click the New Game button to generate a new smart contract and start a completely new game. A small fee will apply to generate a new smart contract game.</h4>
                    {startNewGameButton("Start New Game")}
                </Fragment>
            )}
        </div>
    );
};