import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1904)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9999 39.9999C26.0617 39.9999 31.4932 37.3028 35.1609 33.0435H4.83887C8.5066 37.3028 13.9381 39.9999 19.9999 39.9999Z"
          fill="#0052B4"
        />
        <Path
          d="M40 20C40 8.95437 31.0456 0 20 0C8.95437 0 0 8.95437 0 20C0 21.8052 0.240625 23.5538 0.688984 25.2174H39.3111C39.7594 23.5538 40 21.8052 40 20Z"
          fill="#0052B4"
        />
        <Path
          d="M1.58984 27.8262C1.97539 28.7321 2.42609 29.6034 2.9357 30.4348H37.0648C37.5742 29.6033 38.0249 28.732 38.4106 27.8262H1.58984Z"
          fill="#D80027"
        />
        <Path
          d="M14.2962 21.3044L14.62 22.3008H15.6677L14.8201 22.9167L15.1439 23.9131L14.2962 23.2973L13.4486 23.9131L13.7724 22.9167L12.9248 22.3008H13.9725L14.2962 21.3044Z"
          fill="#FFDA44"
        />
        <Path
          d="M14.2962 34.3479L14.62 35.3444H15.6677L14.8201 35.9602L15.1439 36.9566L14.2962 36.3408L13.4486 36.9566L13.7724 35.9602L12.9248 35.3444H13.9725L14.2962 34.3479Z"
          fill="#FFDA44"
        />
        <Path
          d="M8.22492 29.9368L8.54867 30.9331H9.59641L8.74883 31.5489L9.07258 32.5454L8.22492 31.9296L7.37727 32.5454L7.70117 31.5489L6.85352 30.9331H7.90117L8.22492 29.9368Z"
          fill="#FFDA44"
        />
        <Path
          d="M10.5443 22.6086L10.8681 23.6051H11.9157L11.0682 24.2209L11.392 25.2174L10.5443 24.6015L9.69668 25.2174L10.0206 24.2209L9.17285 23.6051H10.2206L10.5443 22.6086Z"
          fill="#FFDA44"
        />
        <Path
          d="M6.85352 26.7121L7.90101 26.7122L8.22484 25.7156L8.54867 26.7121L9.59641 26.7121L8.74875 27.3279L9.07258 28.3244L8.22484 27.7085L7.37727 28.3242L7.70102 27.3278L6.85352 26.7121Z"
          fill="#FFDA44"
        />
        <Path
          d="M9.69684 35.4618L10.0206 34.4655L9.17285 33.8498H10.2206L10.5444 32.8533L10.8682 33.8497H11.9159L11.0682 34.4655L11.392 35.462L10.5443 34.8461L9.69684 35.4618Z"
          fill="#FFDA44"
        />
        <Path
          d="M20.3655 29.9368L20.0419 30.9331H18.9941L19.8416 31.5489L19.5179 32.5454L20.3655 31.9296L21.2132 32.5454L20.8894 31.5489L21.737 30.9331H20.6893L20.3655 29.9368Z"
          fill="#FFDA44"
        />
        <Path
          d="M18.0462 22.6086L17.7225 23.6051H16.6748L17.5223 24.2209L17.1986 25.2174L18.0462 24.6015L18.8939 25.2174L18.57 24.2209L19.4177 23.6051H18.37L18.0462 22.6086Z"
          fill="#FFDA44"
        />
        <Path
          d="M21.737 26.7121L20.6895 26.7122L20.3656 25.7156L20.0419 26.7121L18.9941 26.7121L19.8417 27.3279L19.5179 28.3244L20.3656 27.7085L21.2132 28.3242L20.8895 27.3278L21.737 26.7121Z"
          fill="#FFDA44"
        />
        <Path
          d="M18.8939 35.4618L18.5702 34.4655L19.4179 33.8498H18.3701L18.0463 32.8533L17.7225 33.8497H16.6748L17.5225 34.4655L17.1987 35.462L18.0464 34.8461L18.8939 35.4618Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1904">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CaboVerde'

/**
 * Flags by `Deji.Zeal`: Cabo Verde
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const CaboVerde = memo(Icon)
