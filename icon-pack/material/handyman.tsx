import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.6888 18.669L16.3888 13.369H15.3988L12.8588 15.909V16.899L18.1588 22.199C18.5488 22.589 19.1788 22.589 19.5688 22.199L21.6888 20.079C22.0788 19.699 22.0788 19.059 21.6888 18.669ZM18.8588 20.089L14.6188 15.849L15.3288 15.139L19.5688 19.379L18.8588 20.089Z" />
      <Path d="M17.3588 10.689L18.7688 9.27902L20.8888 11.399C22.0588 10.229 22.0588 8.32902 20.8888 7.15902L17.3488 3.61902L15.9388 5.02902V2.20902L15.2388 1.49902L11.6988 5.03902L12.4088 5.74902H15.2388L13.8288 7.15902L14.8888 8.21902L11.9988 11.109L7.8688 6.97902V5.55902L4.8488 2.53902L2.0188 5.36902L5.0488 8.39902H6.4588L10.5888 12.529L9.7388 13.379H7.6188L2.3188 18.679C1.9288 19.069 1.9288 19.699 2.3188 20.089L4.4388 22.209C4.8288 22.599 5.4588 22.599 5.8488 22.209L11.1488 16.909V14.789L16.2988 9.63902L17.3588 10.689ZM9.3788 15.839L5.1388 20.079L4.4288 19.369L8.6688 15.129L9.3788 15.839Z" />
    </Svg>
  )
}

Icon.displayName = 'Handyman'

/**
 * Material Icon: Handyman
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:handyman Material Icon Docs}
 */
export const Handyman = memo(Icon)
