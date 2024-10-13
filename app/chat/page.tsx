import { ChatInput } from "@/components/chat/ChatInput";
import { ChatList } from "@/components/chat/ChatList";
import { ChatNav } from "@/components/chat/ChatNav";

export default function ChatPage() {
  return (
    <section className="flex flex-col overflow-y-auto items-center justify-center gap-4 w-full h-full">
      <ChatNav />
      <div className="flex-1 w-full  overflow-y-auto flex">
        {/* <ChatEmpty /> */}
        <ChatList />
      </div>
      <div className="w-full p-6">
        <ChatInput />
      </div>
    </section>
  );
}
