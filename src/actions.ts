export const HAPPY_BUTTON_CLICKED = 'happy button clicked'
export const SAD_BUTTON_CLICKED = 'sad button clicked'
export const HAPPY_CLEARED = 'happy cleared'
export const SAD_CLEARED = 'sad cleared'

export const happyButtonClicked = (intensity: number, when: Date) => ({
    type: HAPPY_BUTTON_CLICKED,
    payload: {
        intensity,
        when
    }
})

export const sadButtonClicked = (intensity: number, when: Date) => ({
    type: SAD_BUTTON_CLICKED,
    payload: {
        intensity,
        when
    }
})

export const happyCleared = () => ({
    type: HAPPY_CLEARED
})

export const sadCleared = () => ({
    type: SAD_CLEARED
})