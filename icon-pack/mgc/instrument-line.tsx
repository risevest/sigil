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
          d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 1c2.08 0 3.716.448 4.628.77.891.317 1.325 1.192 1.227 2.02l-.024.155-.722 3.61c-.196.977-1.232 1.45-2.079 1.112-.645-.258-1.7-.604-2.75-.66l-.3-.007c-1.133.005-2.312.388-3.01.667-.805.321-1.78-.09-2.043-.97l-.036-.143-.722-3.609c-.174-.872.256-1.839 1.203-2.174A14.03 14.03 0 0 1 12 6m0 2c-1.719 0-3.08.355-3.856.62l.6 2.997c.683-.24 1.623-.506 2.624-.59l.738-1.474a1 1 0 1 1 1.788.894l-.352.705c.65.122 1.244.3 1.715.465l.6-2.997A12.082 12.082 0 0 0 12 8"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'InstrumentLine'

/**
 * MingCute Icon: Instrument Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const InstrumentLine = memo(Icon)
