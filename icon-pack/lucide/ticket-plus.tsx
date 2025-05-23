import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M5.99999 8.00001H9.99999M7.99999 6.00001V10M1.33333 6.00001C1.86376 6.00001 2.37247 6.21072 2.74754 6.5858C3.12261 6.96087 3.33333 7.46958 3.33333 8.00001C3.33333 8.53044 3.12261 9.03915 2.74754 9.41422C2.37247 9.7893 1.86376 10 1.33333 10V11.3333C1.33333 11.687 1.4738 12.0261 1.72385 12.2762C1.9739 12.5262 2.31304 12.6667 2.66666 12.6667H13.3333C13.6869 12.6667 14.0261 12.5262 14.2761 12.2762C14.5262 12.0261 14.6667 11.687 14.6667 11.3333V10C14.1362 10 13.6275 9.7893 13.2524 9.41422C12.8774 9.03915 12.6667 8.53044 12.6667 8.00001C12.6667 7.46958 12.8774 6.96087 13.2524 6.5858C13.6275 6.21072 14.1362 6.00001 14.6667 6.00001V4.66668C14.6667 4.31305 14.5262 3.97392 14.2761 3.72387C14.0261 3.47382 13.6869 3.33334 13.3333 3.33334H2.66666C2.31304 3.33334 1.9739 3.47382 1.72385 3.72387C1.4738 3.97392 1.33333 4.31305 1.33333 4.66668V6.00001Z"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'TicketPlus'

/**
 * Lucide Icon: Ticket Plus
 * @see {@link https://lucide.dev/icons/ticket-plus Lucide Icon Docs}
 */
export const TicketPlus = memo(Icon)
