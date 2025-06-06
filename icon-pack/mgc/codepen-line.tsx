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
          d="m13 3.228 7.998 4.617a2 2 0 0 1 1 1.732v4.846a2 2 0 0 1-1 1.732L13 20.772a2 2 0 0 1-2 0l-7.998-4.617a2 2 0 0 1-1-1.732V9.577a2 2 0 0 1 1-1.732L11 3.228a2 2 0 0 1 2 0m-4.802 9.927L5.002 15 11 18.463v-3.69zm7.604 0L13 14.772v3.69L18.998 15zm-11.8-2.423v2.536L6.198 12zm15.996 0L17.802 12l2.196 1.268zM12 10.96 10.198 12 12 13.04 13.802 12zm-1-5.423L5.002 9l3.196 1.845L11 9.228zm2 0v3.69l2.802 1.618L18.998 9z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CodepenLine'

/**
 * MingCute Icon: Codepen Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CodepenLine = memo(Icon)
