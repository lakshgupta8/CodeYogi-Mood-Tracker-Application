export const HAPPY_BUTTON_CLICKED = 'happy button clicked'
export const SAD_BUTTON_CLICKED = 'sad button clicked'

export const happyButtonClicked = (quantity: number) => ({
    type: HAPPY_BUTTON_CLICKED,
    payload: quantity
})

export const sadButtonClicked = (quantity: number) => ({
    type: SAD_BUTTON_CLICKED,
    payload: quantity
})