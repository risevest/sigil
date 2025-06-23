import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 17" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M6.0026 9.08838C6.37079 9.08838 6.66927 8.7899 6.66927 8.42171C6.66927 8.05352 6.37079 7.75505 6.0026 7.75505C5.63441 7.75505 5.33594 8.05352 5.33594 8.42171C5.33594 8.7899 5.63441 9.08838 6.0026 9.08838Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.0026 4.42171C6.37079 4.42171 6.66927 4.12324 6.66927 3.75505C6.66927 3.38686 6.37079 3.08838 6.0026 3.08838C5.63441 3.08838 5.33594 3.38686 5.33594 3.75505C5.33594 4.12324 5.63441 4.42171 6.0026 4.42171Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.0026 13.755C6.37079 13.755 6.66927 13.4566 6.66927 13.0884C6.66927 12.7202 6.37079 12.4217 6.0026 12.4217C5.63441 12.4217 5.33594 12.7202 5.33594 13.0884C5.33594 13.4566 5.63441 13.755 6.0026 13.755Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0026 9.08838C10.3708 9.08838 10.6693 8.7899 10.6693 8.42171C10.6693 8.05352 10.3708 7.75505 10.0026 7.75505C9.63441 7.75505 9.33594 8.05352 9.33594 8.42171C9.33594 8.7899 9.63441 9.08838 10.0026 9.08838Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0026 4.42171C10.3708 4.42171 10.6693 4.12324 10.6693 3.75505C10.6693 3.38686 10.3708 3.08838 10.0026 3.08838C9.63441 3.08838 9.33594 3.38686 9.33594 3.75505C9.33594 4.12324 9.63441 4.42171 10.0026 4.42171Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0026 13.755C10.3708 13.755 10.6693 13.4566 10.6693 13.0884C10.6693 12.7202 10.3708 12.4217 10.0026 12.4217C9.63441 12.4217 9.33594 12.7202 9.33594 13.0884C9.33594 13.4566 9.63441 13.755 10.0026 13.755Z"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'GripVertical'

/**
 * Lucide Icon: Grip Vertical
 * @see {@link https://lucide.dev Lucide Icon Docs}
 */
export const GripVertical = memo(Icon)
