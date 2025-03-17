import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.04004 13.5C11.25 13.5 13.04 11.71 13.04 9.5C13.04 7.29 11.25 5.5 9.04004 5.5C6.83004 5.5 5.04004 7.29 5.04004 9.5C5.04004 11.71 6.83004 13.5 9.04004 13.5ZM9.04004 7.5C10.14 7.5 11.04 8.4 11.04 9.5C11.04 10.6 10.14 11.5 9.04004 11.5C7.94004 11.5 7.04004 10.6 7.04004 9.5C7.04004 8.4 7.94004 7.5 9.04004 7.5ZM15.43 16.06C13.75 15.2 11.57 14.5 9.04004 14.5C6.51004 14.5 4.33004 15.2 2.65004 16.06C1.65004 16.57 1.04004 17.6 1.04004 18.72V21.5H17.04V18.72C17.04 17.6 16.43 16.57 15.43 16.06ZM15.04 19.5H3.04004V18.72C3.04004 18.34 3.24004 18 3.56004 17.84C4.75004 17.23 6.67004 16.5 9.04004 16.5C11.41 16.5 13.33 17.23 14.52 17.84C14.84 18 15.04 18.34 15.04 18.72V19.5ZM17.97 16.5L19.6 14.87C16.83 11.85 16.83 7.31 19.6 4.13L17.97 2.5C14.07 6.39 14.06 12.45 17.97 16.5ZM22.96 11.45C22.12 10.27 22.12 8.74 22.96 7.56L21.28 5.87C19.26 7.89 19.26 10.94 21.28 13.14L22.96 11.45Z" />
    </Svg>
  )
}

Icon.displayName = 'Transcribe'

/**
 * Material Icon: Transcribe
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:transcribe Material Icon Docs}
 */
export const Transcribe = memo(Icon)
