import React from 'react';

export function AsideSection({ showConversationDebug, setShowConversationDebug }) {
  return (
    <section className="full md:hidden lg:flex lg:quarter lg:screen-v-scroll flex row wrap">
      <div className="full md:py">
        <button
          className={`${showConversationDebug ? 'fuschia' : 'blue'} hover`}
          onClick={() => setShowConversationDebug(!showConversationDebug)}
        >
          Debug
        </button>
        <br />
        <button
          className={'green hover'}
          onClick={() => window.open('https://github.com/Wetwer/davinci-chatbot', '_blank')}
        >
          Github
        </button>
      </div>
    </section>
  );
}
