export var textContent = {
    FlickBuster: {
        title: "FlickBuster",
        type: "message",
        date: "1995-06-15",
        content: '<div style="padding: 0 100px;">Flickbuster is the video rental store division of Mason Industries, with over 150 stores on the East Coast of the United States. While VHS rentals dominate the home movie market, Flickbuster is doubling down on its film reel collection.<br><br>\n    In fact, the store\'s management has gone on record saying they believe film reels and reel-to-reel videotape recorders are the true future of home entertainment.<br><br>\n    With Japan rumored to be releasing a new type of video format called a "digital video disc" (sometimes referred to as a "DVD" for short) later this year, Mason Industries management has been quoted saying they won\'t allow "that awful Japanese garbage" into their stores.<br><br>\n    As interesting as this is, it doesn\'t appear to be related to Victoria Mason\'s kidnapping.</div>'
    },
    MickeyVenuto: {
        title: "Mickey Venuto",
        type: "message",
        date: "1994-09-22",
        content: "<div style=\"padding: 0 50px; text-align: left;\">\n      <div style=\"display: flex; align-items: flex-start; gap: 20px; margin-bottom: 20px;\">\n        <div style=\"position: relative; margin-right: 20px;\"\n          onMouseEnter=\"(e => { e.currentTarget.querySelector('.image-overlay').style.opacity = '1'; })(event)\"\n          onMouseLeave=\"(e => { e.currentTarget.querySelector('.image-overlay').style.opacity = '0'; })(event)\"\n          onClick=\"(() => {\n            const button = event.currentTarget.querySelector('.image-overlay');\n            const evidenceFiles = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');\n            const photoExists = evidenceFiles.some(item => \n              item.title === 'Mickey Venuto Photo' && \n              item.type === 'image'\n            );\n            \n            if (!photoExists) {\n              button.textContent = 'Added to evidence folder';\n              evidenceFiles.push({\n                id: Date.now(),\n                type: 'image',\n                title: 'Mickey Venuto Photo',\n                source: 'Personnel Records',\n                date: '1994-09-22',\n                url: 'https://play.rosebud.ai/assets/Mick.png?6fZm',\n                image: 'https://play.rosebud.ai/assets/Mick.png?6fZm',\n                description: 'Photo of Mickey Venuto, former Mason Industries employee.'\n              });\n              localStorage.setItem('evidenceFiles', JSON.stringify(evidenceFiles));\n              window.dispatchEvent(new Event('storage'));\n            }\n          })()\"\n        >\n          <img src=\"https://play.rosebud.ai/assets/Mick.png?6fZm\" alt=\"Mickey Venuto\" style=\"width: 200px; height: auto; border: 2px solid #333; float: left;\" />\n          <div \n            class=\"image-overlay\"\n            style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255, 255, 255, 0.9); color: #000; padding: 6px 10px; border-radius: 4px; font-size: 12px; opacity: 0; transition: all 0.3s ease; pointer-events: none; text-align: center; width: 70%; font-weight: bold; border: 1px solid #000; z-index: 10;\">\n            Click to add to evidence folder\n          </div>\n        </div>\n        <div style=\"text-align: left;\">\n          Mickey \"Mick\" Venuto was fired from Mason Industries in 1994 for engaging in an inappropriate personal relationship with a team member. The company, known for its strict policies on workplace conduct, terminated Venuto after an internal investigation revealed the violation.<br><br>\n          Sources say his actions created tension within the team and disrupted the professional atmosphere at Mason Industries. Venuto, who had been with the company for five years, was reportedly well-regarded for his technical skills (and good looks) but faced mounting complaints that ultimately led to his dismissal.\n        </div>\n      </div>\n    </div>"
    }
};
