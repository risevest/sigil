import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 3.5C14.5 5 13 9.5 13 9.5H11C11 9.5 9.5 5 9.5 3.5C9.5 2.12 10.62 1 12 1C13.38 1 14.5 2.12 14.5 3.5ZM12 11C10.9 11 10 11.9 10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13C14 11.9 13.1 11 12 11ZM16.08 6.11C16.26 5.36 16.41 4.64 16.47 4.05C19.75 5.69 22 9.08 22 13C22 18.52 17.52 23 12 23C6.48 23 2 18.52 2 13C2 9.08 4.25 5.69 7.53 4.05C7.6 4.64 7.74 5.37 7.92 6.11C5.58 7.51 4 10.07 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 10.07 18.42 7.51 16.08 6.11ZM18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 11 6.98 9.23 8.48 8.14C8.71 8.95 9.13 10.21 9.13 10.21C8.43 10.93 8 11.92 8 13C8 15.21 9.79 17 12 17C14.21 17 16 15.21 16 13C16 11.92 15.57 10.93 14.87 10.21C14.87 10.21 15.28 8.99 15.52 8.14C17.02 9.23 18 11 18 13Z" />
    </Svg>
  )
}

Icon.displayName = 'CrisisAlert'

/**
 * Material Icon: Crisis Alert
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crisis_alert Material Icon Docs}
 */
export const CrisisAlert = memo(Icon)
