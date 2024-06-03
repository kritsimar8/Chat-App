
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
const searchInput = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {setSelectedConversation} = useConversation()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {conversations} = useGetConversations()


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return ;
    if(search.length<3){
     return toast.error('Search term must be at least 3 characters long')
    }

    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('');
    }else toast.error("No such user found!")

  }

  return (
    <form  onSubmit={handleSubmit} className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className ="input input-bordered rounded-full" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white" >
        <FaSearch className="w-6 h-6"/>
        </button>
    </form>
  )
}

export default searchInput
