import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M17 20.4549L18.41 19.0449L15 15.6349L13.59 17.0449L17 20.4549ZM7.5 8.04492H11V13.6349L5.59 19.0449L7 20.4549L13 14.4549V8.04492H16.5L12 3.54492L7.5 8.04492Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CallMerge'

/**
 * Material Icon: Call Merge
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:call_merge Material Icon Docs}
 */
export const CallMerge = memo(Icon)
