import {css} from 'styled-components'

export const mobile = (props) => {
     return css`
        @media only screen and (max-width: 640px) {
            ${props}
        }
     `
}

export const medium = props => {
    return css`
      @media only screen and (max-width: 1007px) {
         ${props}
      }
    `
}