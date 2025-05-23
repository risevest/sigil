import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="m17.707 4.293 2.829 2.828a1 1 0 0 1-1.415 1.415L18 7.414V20a1 1 0 1 1-2 0V7.414l-1.121 1.122a1 1 0 1 1-1.415-1.415l2.829-2.828a1 1 0 0 1 1.414 0M8 12c.674 0 1.28.396 1.556 1.002l.054.132 2.332 6.53a1 1 0 0 1-1.838.78l-.046-.108L9.581 19H6.419l-.477 1.336a1 1 0 0 1-1.917-.56l.033-.112 2.332-6.53A1.71 1.71 0 0 1 8 12m0 2.573L7.133 17h1.734zM10.759 3c.94 0 1.43 1.092.855 1.792l-.078.086L7.414 9H11a1 1 0 0 1 .117 1.993L11 11H5.241c-.94 0-1.43-1.092-.855-1.792l.078-.086L8.586 5H5a1 1 0 0 1-.117-1.993L5 3z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ZaSortAscendingLettersLine'

/**
 * MingCute Icon: Za Sort Ascending Letters Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ZaSortAscendingLettersLine = memo(Icon)
