import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_147)">
        <Path
          d="M0.944375 13.9131C0.331719 15.8324 -7.81112e-05 17.8772 1.37933e-08 19.9998C-7.81112e-05 22.1224 0.331797 24.1674 0.944453 26.0867L20 26.9564L39.0555 26.0869C39.6681 24.1674 40.0001 22.1224 40.0001 19.9999C40 17.8773 39.6682 15.8324 39.0555 13.913L20 13.0435L0.944375 13.9131Z"
          fill="#F0F0F0"
        />
        <Path
          d="M39.0547 13.9131L19.9991 13.0436L0.943516 13.9131C0.761953 14.4822 0.605625 15.0624 0.474609 15.6523H39.5234C39.3925 15.0623 39.2362 14.482 39.0547 13.9131Z"
          fill="#D80027"
        />
        <Path
          d="M0.474609 24.3477C0.605469 24.9375 0.761797 25.5177 0.943359 26.0867L0.945234 26.0868L19.9988 26.9563L39.0544 26.0868C39.2359 25.5177 39.3923 24.9375 39.5232 24.3477H0.474609Z"
          fill="#D80027"
        />
        <Path
          d="M20.0008 39.9998C28.9239 39.9998 36.4809 34.1559 39.0563 26.0868H0.945312C3.5207 34.1558 11.0779 39.9998 20.0008 39.9998V39.9998Z"
          fill="#6DA544"
        />
        <Path
          d="M20.0009 -0.00012207C11.0779 -4.39445e-05 3.52086 5.84394 0.945312 13.9129L39.0563 13.913C36.4811 5.84386 28.924 -0.000200195 20.0009 -0.00012207V-0.00012207Z"
          fill="#338AF3"
        />
        <Path
          d="M9.13992 8.26087C9.13992 6.38767 10.4564 4.82282 12.2145 4.43892C11.9443 4.37985 11.6639 4.3479 11.3759 4.3479C9.21484 4.3479 7.46289 6.09978 7.46289 8.26095C7.46289 10.4221 9.21469 12.174 11.3759 12.174C11.6639 12.174 11.9442 12.142 12.2145 12.083C10.4565 11.6989 9.13992 10.1341 9.13992 8.26087V8.26087Z"
          fill="#F0F0F0"
        />
        <Path
          d="M14.5265 10.0396L14.7913 10.8548H15.6485L14.9551 11.3587L15.2199 12.1739L14.5265 11.6701L13.8329 12.1739L14.0978 11.3587L13.4043 10.8548H14.2615L14.5265 10.0396Z"
          fill="#F0F0F0"
        />
        <Path
          d="M17.2627 10.0396L17.5276 10.8548H18.3848L17.6912 11.3587L17.9562 12.1739L17.2627 11.6701L16.5691 12.1739L16.8341 11.3587L16.1406 10.8548H16.9977L17.2627 10.0396Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9991 10.0396L20.264 10.8548H21.1212L20.4277 11.3587L20.6926 12.1739L19.9991 11.6701L19.3055 12.1739L19.5705 11.3587L18.877 10.8548H19.7342L19.9991 10.0396Z"
          fill="#F0F0F0"
        />
        <Path
          d="M22.7355 10.0396L23.0004 10.8548H23.8575L23.1641 11.3587L23.429 12.1739L22.7355 11.6701L22.0419 12.1739L22.3069 11.3587L21.6133 10.8548H22.4705L22.7355 10.0396Z"
          fill="#F0F0F0"
        />
        <Path
          d="M25.4716 10.0396L25.7366 10.8548H26.5937L25.9003 11.3587L26.1652 12.1739L25.4716 11.6701L24.7781 12.1739L25.043 11.3587L24.3496 10.8548H25.2067L25.4716 10.0396Z"
          fill="#F0F0F0"
        />
        <Path
          d="M17.2627 7.19373L17.5276 8.00888H18.3848L17.6912 8.51287L17.9562 9.32802L17.2627 8.82419L16.5691 9.32802L16.8341 8.51287L16.1406 8.00888H16.9977L17.2627 7.19373Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9991 7.19373L20.264 8.00888H21.1212L20.4277 8.51287L20.6926 9.32802L19.9991 8.82419L19.3055 9.32802L19.5705 8.51287L18.877 8.00888H19.7342L19.9991 7.19373Z"
          fill="#F0F0F0"
        />
        <Path
          d="M22.7355 7.19373L23.0004 8.00888H23.8575L23.1641 8.51287L23.429 9.32802L22.7355 8.82419L22.0419 9.32802L22.3069 8.51287L21.6133 8.00888H22.4705L22.7355 7.19373Z"
          fill="#F0F0F0"
        />
        <Path
          d="M25.4716 7.19373L25.7366 8.00888H26.5937L25.9003 8.51287L26.1652 9.32802L25.4716 8.82419L24.7781 9.32802L25.043 8.51287L24.3496 8.00888H25.2067L25.4716 7.19373Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9991 4.34778L20.264 5.16309H21.1212L20.4277 5.66692L20.6926 6.48223L19.9991 5.9784L19.3055 6.48223L19.5705 5.66692L18.877 5.16309H19.7342L19.9991 4.34778Z"
          fill="#F0F0F0"
        />
        <Path
          d="M22.7355 4.34778L23.0004 5.16309H23.8575L23.1641 5.66692L23.429 6.48223L22.7355 5.9784L22.0419 6.48223L22.3069 5.66692L21.6133 5.16309H22.4705L22.7355 4.34778Z"
          fill="#F0F0F0"
        />
        <Path
          d="M25.4716 4.34778L25.7366 5.16309H26.5937L25.9003 5.66692L26.1652 6.48223L25.4716 5.9784L24.7781 6.48223L25.043 5.66692L24.3496 5.16309H25.2067L25.4716 4.34778Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_147">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'UzbekistAn'

/**
 * Flags by `Deji.Zeal`: Uzbekist An
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const UzbekistAn = memo(Icon)
