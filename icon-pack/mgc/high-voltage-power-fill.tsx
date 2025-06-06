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
          d="m12 14.026 7.865 5.407.084.25a1 1 0 0 1-.83 1.31L19 21H5a1 1 0 0 1-.98-1.2l.031-.116.084-.25zm4.956-3.407.021.15 1.839 5.516-5.05-3.472zm-9.912 0 3.19 2.194-5.05 3.472 1.839-5.516zM15 3a1 1 0 0 1 .514.142l.11.077 5 4a1 1 0 0 1-.498 1.773L20 9h-4.22L12 11.599 8.22 9H4a1 1 0 0 1-.718-1.696l.093-.085 5-4a1 1 0 0 1 .49-.21L9 3zm1.347 3.358L16.44 7h.71l-.802-.642Zm-8.694 0L6.851 7h.71zM14.133 5H9.867l-.285 2h4.836z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HighVoltagePowerFill'

/**
 * MingCute Icon: High Voltage Power Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HighVoltagePowerFill = memo(Icon)
