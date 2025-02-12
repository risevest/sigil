import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 25" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M3.5 7.5V5.5C3.5 4.96957 3.71071 4.46086 4.08579 4.08579C4.46086 3.71071 4.96957 3.5 5.5 3.5H7.5M17.5 3.5H19.5C20.0304 3.5 20.5391 3.71071 20.9142 4.08579C21.2893 4.46086 21.5 4.96957 21.5 5.5V7.5M21.5 17.5V19.5C21.5 20.0304 21.2893 20.5391 20.9142 20.9142C20.5391 21.2893 20.0304 21.5 19.5 21.5H17.5M7.5 21.5H5.5C4.96957 21.5 4.46086 21.2893 4.08579 20.9142C3.71071 20.5391 3.5 20.0304 3.5 19.5V17.5M9.5 9.5H9.51M15.5 9.5H15.51M9.13767 15.1604C9.80228 15.7429 10.9619 16.5 12.5 16.5C14.0381 16.5 15.1977 15.7429 15.8623 15.1604"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </Svg>
  )
}

Icon.displayName = 'ScanFace'

/**
 * Lucide Icon: Scan Face
 * @see {@link https://lucide.dev/icons/scan-face Lucide Icon Docs}
 */
export const ScanFace = memo(Icon)
