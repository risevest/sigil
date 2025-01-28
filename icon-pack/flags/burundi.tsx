import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1955)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M32.1779 4.13288C25.0176 -1.37696 14.9826 -1.37696 7.82227 4.1328L20.0001 16.3106L32.1779 4.13288Z"
          fill="#D80027"
        />
        <Path
          d="M19.9999 23.6894L7.82227 35.867C14.9826 41.3769 25.0176 41.3769 32.1779 35.867L20.0001 23.6892L19.9999 23.6894Z"
          fill="#D80027"
        />
        <Path
          d="M16.3111 20.0001L4.13336 7.82227C-1.37648 14.9826 -1.37648 25.0176 4.13336 32.1779L16.3111 20.0001Z"
          fill="#6DA544"
        />
        <Path
          d="M23.6895 20.0001L35.8671 32.1779C41.377 25.0176 41.377 14.9826 35.8671 7.82227L23.6895 20.0001Z"
          fill="#6DA544"
        />
        <Path
          d="M20.0003 28.6957C24.8028 28.6957 28.6959 24.8025 28.6959 20.0001C28.6959 15.1976 24.8028 11.3044 20.0003 11.3044C15.1979 11.3044 11.3047 15.1976 11.3047 20.0001C11.3047 24.8025 15.1979 28.6957 20.0003 28.6957Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20.0004 13.9131L20.7534 15.2175H22.2596L21.5064 16.5218L22.2596 17.8261H20.7534L20.0004 19.1305L19.2473 17.8261H17.7412L18.4943 16.5218L17.7412 15.2175H19.2473L20.0004 13.9131Z"
          fill="#D80027"
        />
        <Path
          d="M16.1723 20L16.9254 21.3044H18.4314L17.6784 22.6087L18.4314 23.9131H16.9254L16.1723 25.2174L15.4192 23.9131H13.9131L14.6661 22.6087L13.9131 21.3044H15.4192L16.1723 20Z"
          fill="#D80027"
        />
        <Path
          d="M23.8276 20L24.5806 21.3044H26.0867L25.3337 22.6087L26.0867 23.913H24.5806L23.8276 25.2174L23.0745 23.913H21.5684L22.3214 22.6087L21.5684 21.3044H23.0745L23.8276 20Z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1955">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Burundi'

/**
 * Flags by `Deji.Zeal`: Burundi
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Burundi = memo(Icon)
