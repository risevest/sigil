import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1088)">
        <Path
          d="M20 40C31.0456 40 40 31.0456 40 20C40 16.6435 39.1719 13.4808 37.7108 10.7031L19.9765 20.0234L29.2969 2.28922C26.5192 0.828125 23.3565 0 20 0C8.95437 0 0 8.95437 0 20C0 25.5229 2.23859 30.5229 5.85781 34.1422C9.47711 37.7615 14.4771 40 20 40Z"
          fill={color}
        />
        <Path
          d="M37.6892 10.725C36.7738 8.9825 35.5835 7.34648 34.1184 5.88133C32.6531 4.41617 31.0173 3.22594 29.2747 2.31055L5.83398 34.1656L37.6892 10.725Z"
          fill={color}
        />
        <Path
          d="M5.83398 34.1656L37.6892 10.725C36.7738 8.98252 35.5835 7.3465 34.1184 5.88135L5.83398 34.1656Z"
          fill={color}
        />
        <Path
          d="M17.3676 11.7283L14.9251 12.8772L16.2258 15.2428L13.5734 14.7354L13.2373 17.4148L11.3898 15.4441L9.54234 17.4148L9.20641 14.7354L6.55406 15.2427L7.85461 12.8771L5.41211 11.7283L7.85469 10.5793L6.55406 8.21386L9.20625 8.72112L9.54242 6.04175L11.3898 8.01245L13.2373 6.04175L13.5734 8.72112L16.2259 8.21386L14.9252 10.5794L17.3676 11.7283Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1088">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'MarshallIsland'

/**
 * Flags by Deji.Zeal: Marshall Island
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const MarshallIsland = memo(Icon)
