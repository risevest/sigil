import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2181)">
        <Path
          d="M0 20C0 8.95437 8.95438 0 20 0C31.0456 0 40 8.95437 40 20C39.1305 20 20 22.6087 20 22.6087L0 20Z"
          fill="#D80027"
        />
        <Path
          d="M40 20.0001C40 31.0457 31.0456 40.0001 20 40.0001C8.95437 40.0001 0 31.0457 0 20.0001"
          fill="black"
        />
        <Path
          d="M17.2578 15.9072L18.9533 17.1377L18.3072 19.1305L20.0014 17.898L21.697 19.1285L21.0484 17.1363L22.7425 15.9039L20.6476 15.9052L19.9989 13.9131L19.3527 15.9059L17.2578 15.9072Z"
          fill="#FFDA44"
        />
        <Path
          d="M25 11.3398C23.424 10.4299 21.7008 10.0005 20 10.0034V12.6116C21.2571 12.6093 22.5307 12.9265 23.6956 13.5991C27.2252 15.6369 28.4388 20.1663 26.4009 23.6959C24.3632 27.2254 19.8339 28.4391 16.3043 26.4012C15.276 25.8076 14.4459 25.0015 13.8341 24.0712L11.6562 25.5091C12.4841 26.7676 13.6088 27.8572 15 28.6603C19.7753 31.4173 25.9032 29.7754 28.6602 25.0001C31.4172 20.2248 29.7753 14.0969 25 11.3398V11.3398Z"
          fill="#FFDA44"
        />
        <Path
          d="M14.2336 18.261C13.5422 19.525 14.0064 21.1102 15.2703 21.8016L23.7429 26.4313C23.1667 27.4845 23.4727 28.7665 24.5259 29.3426L26.8146 30.5946C27.8678 31.1708 29.189 30.784 29.7652 29.7307L31.0171 27.4421L14.2336 18.261Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2181">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Angola'

/**
 * Flags by `Deji.Zeal`: Angola
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Angola = memo(Icon)
