const selMsgs = async () => {
    const container = document.querySelector('.msg-conversations-container');
    if (!container) {
      console.log('Could not find the HTML element containing the messages.');
      return;
    }
    const loadAllMessages = async () => {
      return await new Promise((resolve) => {
        let height = 0;
        let attempts = 0;
        if (container) {
          console.log('loading messages...');
          const interval = setInterval(() => {
            const { scrollHeight } = container;
            if (scrollHeight > 20000) {
              console.log(
                'limited to around 200 messages...'
              );
              clearInterval(interval);
              resolve();
            }
            if (scrollHeight === height) {
              if (attempts >= 3) {
                console.log('messages loaded...');
                clearInterval(interval);
                resolve();
              } else {
                console.log('...');
                attempts++;
              }
            }
            height = scrollHeight;
            container.scrollTop = scrollHeight;
          }, 1000);
        } else {
          console.log('no messages');
        }
      });
    };
    await loadAllMessages();
    console.log('attempting to select all messages');
    const labels = container.getElementsByTagName('label');
    for (let i = 0; i < labels.length; i++) {
      if (labels[i]) {
        labels[i].click();
      }
    }
    console.log('Click the trash can icon at the top to delete all messages.');
    console.log('type "selMsgs()" below this and then hit enter to run again.');
  };
  selMsgs();
