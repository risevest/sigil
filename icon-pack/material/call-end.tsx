import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M18.59 11.0903C19.64 11.6003 20.63 12.2403 21.55 13.0003L20.48 14.0703C19.9 13.6003 19.27 13.1803 18.6 12.8003V11.0903M5.4 11.0903V12.7903C4.75 13.1603 4.12 13.5803 3.53 14.0603L2.46 12.9903C3.37 12.2403 4.36 11.6103 5.4 11.0903ZM12 7.57031C7.46 7.57031 3.34 9.35031 0.29 12.2403C0.11 12.4203 0 12.6703 0 12.9503C0 13.2303 0.11 13.4803 0.29 13.6503L2.77 16.1303C2.95 16.3103 3.2 16.4203 3.48 16.4203C3.75 16.4203 4 16.3203 4.18 16.1403C4.97 15.4103 5.86 14.7803 6.84 14.2903C7.17 14.1303 7.4 13.7803 7.4 13.3903V10.2903C8.85 9.82031 10.4 9.57031 12 9.57031C13.6 9.57031 15.15 9.82031 16.59 10.3003V13.4003C16.59 13.8003 16.82 14.1403 17.15 14.3003C18.13 14.7903 19.03 15.4103 19.82 16.1503C20 16.3203 20.25 16.4303 20.52 16.4303C20.8 16.4303 21.05 16.3203 21.23 16.1403L23.71 13.6603C23.89 13.4803 24 13.2303 24 12.9503C24 12.6703 23.89 12.4203 23.71 12.2403C20.66 9.35031 16.54 7.57031 12 7.57031Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CallEnd'

/**
 * Material Icon: Call End
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:call_end Material Icon Docs}
 */
export const CallEnd = memo(Icon)
