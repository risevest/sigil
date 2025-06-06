import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13 4a2 2 0 0 1 2 2h4.268A2 2 0 0 1 23 7a2 2 0 0 1-3.732 1h-3.392a8.004 8.004 0 0 1 4.062 6H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 1.917-1.998 6.008 6.008 0 0 0-3.569-4.525A1.993 1.993 0 0 1 13 10h-2c-.52 0-.993-.198-1.348-.523a6.008 6.008 0 0 0-3.57 4.525A2 2 0 0 1 8 16v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.062a8.004 8.004 0 0 1 4.062-6H4.732a2 2 0 1 1 0-2H9a2 2 0 0 1 2-2zm7 12h-2v2h2zM6 16H4v2h2zm7-10h-2v2h2z"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'VectorBezierLine'

/**
 * MingCute Icon: Vector Bezier Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const VectorBezierLine = memo(Icon)
