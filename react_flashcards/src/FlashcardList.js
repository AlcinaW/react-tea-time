import React from 'react'
import Flashcard from "./Flashcard";

export default function FlashcardList({ flashcards }) {
    return (
        <div className="card-grid">
            {/* loop through flashcards and return flashcard component */}
            {flashcards.map(flashcard => {
                // Set key to only re-render cards that have changed.
                return <Flashcard flashcard={flashcard} key={flashcard.id} /> 
            })}
        </div>
    )
}
