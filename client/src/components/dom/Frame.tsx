import { useRef, forwardRef, useImperativeHandle } from 'react'

const Frame = forwardRef(
  (
    {
      children,
      ...props
    }: {
      children: React.ReactNode
    },
    ref,
  ) => {
    const localRef = useRef()

    useImperativeHandle(ref, () => localRef.current)

    return (
      <div {...props} ref={localRef} className='flex flex-col fixed  w-screen h-screen'>
        {children}
      </div>
    )
  },
)
Frame.displayName = 'Frame'

export default Frame
