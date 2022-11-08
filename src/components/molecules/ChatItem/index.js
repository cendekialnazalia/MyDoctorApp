import React from 'react';
import IsMe from './isMe';
import Other from './Other';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
