import React from 'react'
import './CuriosityCard.css'

function CuriosityCard({frontTitle, frontText, backTitle, backText}) {
  return (
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <p class="title">{frontTitle}</p>
                <p>{frontText}</p>
            </div>
            <div class="flip-card-back">
                <p class="title">{backTitle}</p>
                <p>{backText}</p>
            </div>
        </div>
    </div>
  )
}

export default CuriosityCard;