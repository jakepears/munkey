import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

type Props = {
    id: string
}

function ChatRow({id}: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const { data:session } = useSession()
  const [active, setActive] = useState(false)

  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
  )
  useEffect(() => {
  if (!pathname) return;

  const path: string | null = pathname // Call the usePathname hook to get the path and store the result in a variable
  if (typeof path === 'string' && path.includes(id)) { // Check if the path is a string and contains the chat ID
    setActive(true);
  } else {
    setActive(false);
  }
}, [pathname]);

  const removeChat = async() => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
    if(router){
    router.replace('/')
  }
}
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}>
        <ChatBubbleLeftIcon className='h-5 w-5' />
        <p className='flex-1 hidden md:inline-flex truncate'>
          {messages?.docs[messages?.docChanges.length - 1]?.data().text || 'New Chat'}
        </p>
        <TrashIcon onClick={removeChat} className='h-5 w-5 text-gray-700 hover:text-red-700' />
    </Link>
  )
}

export default ChatRow