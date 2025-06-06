import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M15.915 1.689a1 1 0 0 1 1.292.104l2.483 2.483c.636.636.186 1.724-.714 1.724H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10.132l-.526-1.053a1 1 0 0 1 .31-1.258M9.263 9a1.5 1.5 0 0 1 1.5-1.5h3a1 1 0 1 1 0 2h-2.5v.696a4.23 4.23 0 0 1 .75-.071c1.896 0 3.188 1.459 3.188 3.188a3.188 3.188 0 0 1-6.11 1.275 1 1 0 0 1 1.833-.8 1.188 1.188 0 0 0 2.277-.476c0-.687-.46-1.187-1.188-1.187a2.95 2.95 0 0 0-.887.167 3.72 3.72 0 0 0-.417.166 1 1 0 0 1-1.446-.896z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RewindForwardSquare5Line'

/**
 * MingCute Icon: Rewind Forward Square 5 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RewindForwardSquare5Line = memo(Icon)
