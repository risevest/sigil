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
          d="m20.255 5.52.087.298.089.338.044.185.089.4.085.443.081.485c.026.169.05.345.074.528l.065.572c.08.791.131 1.7.131 2.731s-.05 1.94-.13 2.731l-.066.572c-.023.183-.048.36-.074.528l-.08.485-.086.443-.089.4-.089.36-.088.317-.043.144c-.331 1.087-1.464 1.505-2.394 1.195l-1.18-.393-.4.933a2 2 0 0 1-2.47 1.11l-5.096-1.7a2 2 0 0 1-1.206-2.684l.269-.628L7 15.055l-1.368.456A2 2 0 0 1 3 13.613V9.388A2 2 0 0 1 5.632 7.49L7 7.946l10.861-3.62c.93-.31 2.063.107 2.394 1.194M9.682 15.948l-.335.78 5.096 1.7.335-.781zm8.706-9.69L8 9.721v3.558l10.388 3.463.077-.283.08-.327.04-.18.078-.394a17.8 17.8 0 0 0 .076-.439l.07-.485c.112-.847.191-1.887.191-3.134 0-1.246-.08-2.287-.19-3.134l-.071-.485c-.025-.154-.05-.3-.076-.44l-.079-.393-.08-.349zM5 9.388v4.225l1-.334V9.721z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Horn2Line'

/**
 * MingCute Icon: Horn 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Horn2Line = memo(Icon)
