import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.23611 7.46049C8.57416 8.54052 9.22587 9.55225 9.86317 10.5037L10.0123 10.7259C10.1653 10.9537 10.316 11.1779 10.4597 11.3988C10.4597 11.3988 9.90318 10.9699 9.65213 10.7734C8.52697 9.89291 7.72662 9.2666 6.71443 9.06753C6.48879 9.02315 6.25263 9 6 9C3.79086 9 2 10.7909 2 13C2 15.2091 3.79086 17 6 17C6.67629 17 7.35259 16.817 8.03878 16.5204C8.72217 16.225 9.41538 15.8169 10.1282 15.3645C10.1123 16.3363 9.99514 17.1443 9.79852 17.8863C9.55229 18.8155 9.18139 19.6409 8.72841 20.5544C8.39815 21.2204 8.87465 22 9.61803 22H14.382C15.1253 22 15.6018 21.2204 15.2716 20.5544C14.8186 19.6409 14.4477 18.8155 14.2015 17.8863C14.0049 17.1443 13.8877 16.3363 13.8718 15.3645C14.5846 15.8169 15.2778 16.225 15.9612 16.5204C16.6474 16.8171 17.3237 17 18 17C20.2091 17 22 15.2091 22 13C22 10.7909 20.2091 9 18 9C17.7332 9 17.4848 9.02581 17.2478 9.07518C16.2533 9.28228 15.459 9.90391 14.3479 10.7734C14.0968 10.9699 13.5403 11.3988 13.5403 11.3988C13.6181 11.2791 13.6959 11.1601 13.7732 11.0417L13.7747 11.0395L13.7748 11.0393L13.7749 11.0391L13.7751 11.0389C13.8946 10.856 14.0131 10.6746 14.1296 10.4945C14.8038 9.45198 15.4097 8.45411 15.7391 7.47113C15.9043 6.97825 16 6.48913 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 6.50041 8.08792 6.98701 8.23611 7.46049ZM13.4584 7.72074C13.1078 8.40207 12.65 9.10337 12.1022 9.94258L11.9996 10.0997C11.8684 9.90093 11.7419 9.7126 11.6196 9.53077L11.6196 9.53074C11.2389 8.96424 10.9005 8.46087 10.5982 7.90024C10.1889 7.14129 10 6.53374 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.41382 13.8532 6.95355 13.4584 7.72074ZM10.4958 13.3985C10.9721 13.3899 11.4445 13.2117 11.8164 12.8683C11.8826 12.8072 11.9438 12.7426 12 12.6748C12.0562 12.7426 12.1174 12.8072 12.1836 12.8683C12.5555 13.2117 13.0279 13.3899 13.5042 13.3985C13.2933 13.4379 13.0871 13.5116 12.894 13.6198C12.4758 13.8541 12.1635 14.2258 12 14.6599C11.8365 14.2258 11.5242 13.8541 11.106 13.6198C10.9129 13.5116 10.7067 13.4379 10.4958 13.3985ZM11.1853 20C11.5527 19.1113 11.8427 18.1782 12 17.0726C12.1573 18.1782 12.4473 19.1113 12.8147 20H11.1853ZM13.9087 13.3648C14.4532 13.2631 14.902 12.898 15.3304 12.5495C15.4144 12.4811 15.4976 12.4134 15.5807 12.3485C17.0606 11.1904 17.4148 11 18.0002 11C19.1048 11 20.0002 11.8954 20.0002 13C20.0002 14.1046 19.1048 15 18.0002 15C17.3011 15 16.4061 14.604 14.9438 13.6759C14.6281 13.4755 14.2694 13.3714 13.9087 13.3648ZM6 11C6.58546 11 6.93965 11.1904 8.41957 12.3485C8.50259 12.4134 8.58582 12.4811 8.66983 12.5495C9.09823 12.898 9.54698 13.2631 10.0915 13.3648C9.73085 13.3714 9.37215 13.4755 9.05642 13.6759C7.59418 14.604 6.69912 15 6 15C4.89543 15 4 14.1046 4 13C4 11.8954 4.89543 11 6 11Z" />
    </Svg>
  )
}

Icon.displayName = 'PokerClubsLine'

/**
 * Remix Icon: Poker Clubs Line
 * @see {@link https://remixicon.com/icon/poker-clubs-line Remix Icon Docs}
 */
export const PokerClubsLine = memo(Icon)
