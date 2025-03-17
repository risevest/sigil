import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
      <Path d="M9.03 11.03C7.66 12.4 7.66 14.61 9.03 15.98C10.15 17.1 11.83 17.29 13.16 16.57L15.04 18.45L16.45 17.04L14.57 15.16C15.28 13.83 15.1 12.15 13.98 11.03C12.61 9.66 10.39 9.66 9.03 11.03ZM12.56 14.56C11.97 15.15 11.02 15.15 10.44 14.56C9.85 13.97 9.85 13.02 10.44 12.44C11.03 11.85 11.98 11.85 12.56 12.44C13.15 13.03 13.15 13.97 12.56 14.56Z" />
    </Svg>
  )
}

Icon.displayName = 'Plagiarism'

/**
 * Material Icon: Plagiarism
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:plagiarism Material Icon Docs}
 */
export const Plagiarism = memo(Icon)
