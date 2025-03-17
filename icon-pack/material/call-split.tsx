import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M14 4L16.29 6.29L13.41 9.17L14.83 10.59L17.71 7.71L20 10V4H14ZM10 4H4V10L6.29 7.71L11 12.41V20H13V11.59L7.71 6.29L10 4Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CallSplit'

/**
 * Material Icon: Call Split
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:call_split Material Icon Docs}
 */
export const CallSplit = memo(Icon)
