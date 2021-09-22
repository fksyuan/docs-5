(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3821],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),k=o,m=u["".concat(s,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8553:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(2122),o=n(9756),l=(n(7294),n(3905)),i={id:"Become_PlatON_Dev_Verification",title:"Run a dev node",sidebar_label:"Run a dev node"},r=void 0,s={unversionedId:"Become_PlatON_Dev_Verification",id:"Become_PlatON_Dev_Verification",isDocsHomePage:!1,title:"Run a dev node",description:"This guide demonstrates how to install the PlatON Node software on Linux.",source:"@site/../docs/\u6210\u4e3a\u5f00\u53d1\u7f51\u9a8c\u8bc1\u8282\u70b9.md",sourceDirName:".",slug:"/Become_PlatON_Dev_Verification",permalink:"/docs/en/Become_PlatON_Dev_Verification",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u6210\u4e3a\u5f00\u53d1\u7f51\u9a8c\u8bc1\u8282\u70b9.md",version:"current",frontMatter:{id:"Become_PlatON_Dev_Verification",title:"Run a dev node",sidebar_label:"Run a dev node"}},p=[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Installation Overview",id:"installation-overview",children:[]},{value:"Installing on Ubuntu (18.04)",id:"installing-on-ubuntu-1804",children:[]},{value:"Generate keys",id:"generate-keys",children:[]},{value:"Join the PlatON development network",id:"join-the-platon-development-network",children:[{value:"Join the PlatON development Network",id:"join-the-platon-development-network-1",children:[]},{value:"View node status",id:"view-node-status",children:[]}]},{value:"Upgrade to Validator Node",id:"upgrade-to-validator-node",children:[{value:"Install PlatON MTool",id:"install-platon-mtool",children:[]},{value:"Configure PlatON MTool",id:"configure-platon-mtool",children:[]},{value:"Initiate a staking operation",id:"initiate-a-staking-operation",children:[]}]}],d={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide demonstrates how to install the PlatON Node software on Linux."),(0,l.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Server: Server and backup server running PlatON software (both have a firewall)"),(0,l.kt)("li",{parentName:"ul"},"Memory: 8GB RAM"),(0,l.kt)("li",{parentName:"ul"},"Local storage: 100GB system disk, 200GB data disk (can be expanded online)"),(0,l.kt)("li",{parentName:"ul"},"Processor: 64-bit 4 cores (each core above 2.4 GHz)"),(0,l.kt)("li",{parentName:"ul"},"Bandwidth: 5 MB/sec (can be expanded online)")),(0,l.kt)("h3",{id:"installation-overview"},"Installation Overview"),(0,l.kt)("p",null,"It takes three or four steps to install a new node, which depends on the operating system used. The detailed procedures are list below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Installing on Ubuntu (18.04)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note: Use the normal user to execute the following command."))),(0,l.kt)("h3",{id:"installing-on-ubuntu-1804"},"Installing on Ubuntu (18.04)"),(0,l.kt)("h4",{id:"install-and-run-ntp-service"},"Install and run NTP service"),(0,l.kt)("h5",{id:"open-a-terminal-and-run-the-following-commands"},"Open a terminal and run the following commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update &&\nsudo apt-get install -y gnupg2 curl software-properties-common ntp &&\nsudo systemctl enable ntp && sudo systemctl start ntp\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes:"),(0,l.kt)("p",{parentName:"blockquote"},"NTP service is used for time synchronization, incorrect system time will affect the normal operation of PlatON")),(0,l.kt)("h5",{id:"validate-the-ntp-time-synchronization"},"Validate the NTP time synchronization"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ntpq -4c rv | grep leap_none\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes:"),(0,l.kt)("p",{parentName:"blockquote"},"Display ",(0,l.kt)("strong",{parentName:"p"},"associd=0 status=0615 ",(0,l.kt)("font",{color:"red"},"leap_none"),", sync_ntp, 1 event, clock_sync,")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"leap_none")," is red, indicating that the NTP time synchronization is normal.")),(0,l.kt)("h4",{id:"install-platon"},"Install PlatON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://download.platon.network/platon/devnet/platon/1.1.0/platon -P /usr/bin\nsudo wget https://download.platon.network/platon/devnet/platon/1.1.0/platonkey -P /usr/bin\nsudo chmod +x /usr/bin/platon  /usr/bin/platonkey\nplaton version\n")),(0,l.kt)("p",null,"After executing the commands above,  ",(0,l.kt)("inlineCode",{parentName:"p"},"platon")," and",(0,l.kt)("inlineCode",{parentName:"p"}," platonkey")," binary should be successfully installed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/bin")," directory on your system. You can execute corresponding commands in any directory."),(0,l.kt)("h3",{id:"generate-keys"},"Generate keys"),(0,l.kt)("h4",{id:"public-and-private-keys"},"Public and private keys"),(0,l.kt)("p",null,"Each node in the network has an unique identity to distinguish it from others. This identity is a public and private key pair, generated in the node's working directory ( ",(0,l.kt)("inlineCode",{parentName:"p"},"~/platon-node"),") by the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/platon-node/data && platonkey genkeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/platon-node/data/nodekey) >(grep \"PublicKey\" | awk '{print $3}' > ~/platon-node/data/nodeid)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Remark:"),(0,l.kt)("p",{parentName:"blockquote"},"Displays the following, indicating that the key pair has been successfully generated (x stands for number or letter) :"),(0,l.kt)("p",{parentName:"blockquote"},"PrivateKey:  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),(0,l.kt)("p",{parentName:"blockquote"},"PublicKey: :  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"PrivateKey")," is the private key of the node, and",(0,l.kt)("inlineCode",{parentName:"p"}," PublicKey")," is the public key of the node. The public key is used to identify the identity of the node and can be made public."),(0,l.kt)("p",null,"Two files will be generated in the subdirectory ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," under the working directory of the node\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nodeid: node public key (ID) file,  which holds the node's public key"),(0,l.kt)("li",{parentName:"ul"},"nodekey: node private key file, which holds the node's private key")),(0,l.kt)("h4",{id:"bls-public-and-private-key"},"BLS public and private key"),(0,l.kt)("p",null,"In addition to the public and private keys of the node, the PlatON node also needs a key pair called the BLS public and private key. This key pair will be used in the consensus protocol. The key pair can be generated in the node's working directory (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"~/platon-node"),")  by the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/platon-node/data && platonkey genblskeypair | tee >(grep \"PrivateKey\" | awk '{print $2}' > ~/platon-node/data/blskey) >(grep \"PublicKey\" | awk '{print $3}' > ~/platon-node/data/blspub)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"PrivateKey:  f22a785c80bd1095beff1f356811268eae6c94abf0b2b4e2d64918957b74783e\nPublicKey :  4bf873a66df92ada50a8c6bacb132ffd63437bcde7fd338d2d8696170034a6332e404ac3abb50326ee517ec5f63caf12891ce794ed14f8528fa7c54bc0ded7c5291f708116bb8ee8adadf1e88588866325d764230f4a45929d267a9e8f264402")),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"PrivateKey")," is the BLS private key of the node, and",(0,l.kt)("inlineCode",{parentName:"p"}," PublicKey")," is the BLS public key of the node. The BLS public key is used to quickly verify the signature in the consensus protocol and can be published. The BLS private key cannot be made public and needs to be backed up."),(0,l.kt)("p",null,"Two files will be generated in the subdirectory ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," under the working directory of the node:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"blspub: Node BLS public key file, which holds the node's BLS public key")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"blskey: Node BLS private key file, which holds the node's BLS private key"))),(0,l.kt)("h2",{id:"join-the-platon-development-network"},"Join the PlatON development network"),(0,l.kt)("p",null,"The PlatON development network, which will be open to developers, is set to launch on March 10, 2021 (Chainid: 210309)."),(0,l.kt)("p",null,"This section assumes that the server is Ubuntu 18.04, and the working directory of the executable file is ",(0,l.kt)("inlineCode",{parentName:"p"},"~/platon-node"),". Note that all subsequent commands should be run under the same working directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/platon-node\n")),(0,l.kt)("h3",{id:"join-the-platon-development-network-1"},"Join the PlatON development Network"),(0,l.kt)("p",null,"The development network provides a development test environment for the developer or node.There may be instability and a network reset.The current version of the development network is 1.1.0."),(0,l.kt)("h4",{id:"develop-network-related-resources"},"Develop network related resources"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"platon\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://download.platon.network/platon/devnet/platon/1.1.0/platon"},"https://download.platon.network/platon/devnet/platon/1.1.0/platon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"platonkey\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://download.platon.network/platon/devnet/platon/1.1.0/platonkey"},"https://download.platon.network/platon/devnet/platon/1.1.0/platonkey"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"mtool windows\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://download.platon.network/platon/devnet/mtool/windows/1.1.0/platon_mtool.exe"},"https://download.platon.network/platon/devnet/mtool/windows/1.1.0/platon_mtool.exe"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"mtool linux\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://download.platon.network/platon/devnet/mtool/linux/1.1.0/platon_mtool.zip"},"https://download.platon.network/platon/devnet/mtool/linux/1.1.0/platon_mtool.zip")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"You need to change the chain ID in the configuration file config.properties to the development network chain ID: 210309\uff1b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"samurai\uff1a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Open the RPC URL:",(0,l.kt)("a",{parentName:"p",href:"http://35.247.155.162:6789"},"http://35.247.155.162:6789")," and ws://35.247.155.162:6790")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Scan Browser Address: ",(0,l.kt)("a",{parentName:"p",href:"https://devnetscan.platon.network"},"https://devnetscan.platon.network"))))),(0,l.kt)("h4",{id:"initialize-the-genesis-block"},"Initialize the genesis block"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Save the genesis block file"),(0,l.kt)("p",{parentName:"li"},"Save the following to the genesis.json file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/platon-node && wget https://download.platon.network/platon/devnet/platon/1.1.0/genesis.json\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Initialize the genesis block file"),(0,l.kt)("p",{parentName:"li"},"Executive command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/platon-node && platon --datadir ./data init genesis.json\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Description:"),(0,l.kt)("p",{parentName:"blockquote"},"A prompt for ",(0,l.kt)("inlineCode",{parentName:"p"},"Successfully wrote genesis state")," indicates that the initialization creation information is complete.")))),(0,l.kt)("h4",{id:"start-as-a-validator-node"},"Start as a validator node"),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/Install_Node"},"Install node")," section to create a nodekey: nodekey, blskey, and then execute the following command to start the verification node to join the PlatON development network;If you need to become a verification node, please apply for a large test LAT by following instructions (the development network will be reset irregularly according to the test needs, and the LAT of the develop network has no practical value)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/platon-node/ && nohup platon --identity platon-node --datadir ./data --port 16789 --rpcport 6789 --rpcapi "db,platon,net,web3,admin,personal" --rpc --nodekey ./data/nodekey --cbft.blskey ./data/blskey --verbosity 1 --rpcaddr 127.0.0.1 --bootnodes enode://c72a4d2cb8228ca6f9072daa66566bcafa17bec6a9e53765c85c389434488c393357c5c7c5d18cf9b26ceda46aca4da20755cd01bcc1478fff891a201042ba84@devnetnode1.platon.network:16789 --syncmode "fast" > ./data/platon.log 2>&1 &\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Prompt:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameters")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--identity"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the network name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--datadir"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the data directory path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--port"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifying the P2P protocol communication port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--rpcaddr"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify rpc server address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--rpcport"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifying the RPC protocol communication port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--rpcapi"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the rpcapi name open by the node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--rpc"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify http-rpc communication method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nodekey"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the node private key file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--cbft.blskey"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the node bls private key file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbosity"),(0,l.kt)("td",{parentName:"tr",align:null},"The level of logging, 0: CRIT;  1: ERROR; 2: WARN;  3: INFO;  4: DEBUG; 5: TRACE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--syncmode"),(0,l.kt)("td",{parentName:"tr",align:null},"fast: Fast synchronization mode, full: All synchronous mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--db.nogc"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable archive mode")))),(0,l.kt)("p",null,"See more parameters with the command ",(0,l.kt)("inlineCode",{parentName:"p"},"platon --help")),(0,l.kt)("h4",{id:"other"},"Other"),(0,l.kt)("p",null,"If you need to receive large amount of test LAT, please send an email to ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@latticex.foundation"},"support@latticex.foundation")," according to the format requirements. The email requirements are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},"Title: PlatON Develop Network Token Application\nName:\nContact Information:\nWeChat ID (or other instant messaging software) :\nApplication amount:\nUSES:\nReceipt account:\nRemark:\n")),(0,l.kt)("h3",{id:"view-node-status"},"View node status"),(0,l.kt)("p",null,"When PlatON is successfully started, under normal circumstances, it will automatically establish a connection with the node closest to it through the node discovery protocol. After the connection is successful, block synchronization will be started. You can determine whether joining the network successfully by looking at the peers of the node and confirming whether the block height of the node is increasing."),(0,l.kt)("p",null,"If the key is not generated in advance, the node is automatically generated in the node's data directory at startup. If it is automatically generated, only the node private key and BLS private key will be generated, and the relevant public key will not be automatically generated."),(0,l.kt)("h4",{id:"enter-platon--console"},"Enter ",(0,l.kt)("inlineCode",{parentName:"h4"},"PlatON ")," console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Print ",(0,l.kt)("inlineCode",{parentName:"p"},"Welcome to the Platon JavaScript Console!")," Relevant information, indicating successful access to the console, otherwise it will be deemed as failure to access the console, if there is any problem, you can contact the official customer service personnel.")),(0,l.kt)("h4",{id:"view-peers-of-a-node"},"View peers of a node"),(0,l.kt)("p",null,"View the connection node information by executing the following command in the Platon console."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"admin.peers\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the related Peers information is printed, it means that the connected node is successful, as follows:"),(0,l.kt)("p",{parentName:"blockquote"},"[{\ncaps: ",'["cbft/1", "platon/63"]',',\nid: "c72a4d2cb8228ca6f9072daa66566bcafa17bec6a9e53765c85c389434488c393357c5c7c5d18cf9b26ceda46aca4da20755cd01bcc1478fff891a201042ba84",\nname: "PlatONnetwork/alaya-47.241.93.189/v1.0.0-unstable-62b9a900/linux-amd64/go1.13.4",\nnetwork: {\nconsensus: false,\ninbound: false,\nlocalAddress: "192.168.2.128:55572",\nremoteAddress: "47.241.93.189:16789",\nstatic: false,\ntrusted: false\n},\nprotocols: {\ncbft: {\ncommitBn: 1404934,\nhighestQCBn: 1407304,\nlockedBn: 1404935,\nprotocolVersion: 1\n},\nplaton: {\nhead: "0xf31395262f876935c94e33b1d9f3314b2cb6effc33fcffa3b17b725678fd525f",\nnumber: 1407295,\nversion: 63\n}\n}\n}'),(0,l.kt)("p",{parentName:"blockquote"},"...]"),(0,l.kt)("p",{parentName:"blockquote"},"If the printed information is empty, it means that the connection node failed. If there is any problem, you can contact the official customer service personnel.")),(0,l.kt)("h4",{id:"view-the-current-block-height"},"View the current block height"),(0,l.kt)("p",null,"View the block height of the current node by executing the following command in the Platon console."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon.blockNumber\n")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Execute this command several times, if the block height value increases continuously, then the connection is successful;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If it is a new node and the block height is always 0, it means that the node is in the synchronous block and there may be delay. You can use the command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon.syncing\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," is printed, the node is not in a synchronous block state.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If the following message is printed, the node is in a synchronous block state;"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},"{\n  currentBlock: 1412416,\n  highestBlock: 1416699,\n  knownStates: 522,\n  pulledStates: 522,\n  startingBlock: 1408247\n}\n"))))))),(0,l.kt)("h4",{id:"exit-console"},"Exit console"),(0,l.kt)("p",null,"Type Exit to exit the console."),(0,l.kt)("h2",{id:"upgrade-to-validator-node"},"Upgrade to Validator Node"),(0,l.kt)("p",null,"PlatON is a blockchain project that implements democratic governance. Verification nodes are jointly selected by all LAT holders to maintain and develop the PlatON network. The 201 nodes with the most votes will become candidate nodes, from which 43 verification nodes will be randomly selected using VRF to participate in the management of the entire PlatON network."),(0,l.kt)("p",null,"This section describes how to operate as a validator node."),(0,l.kt)("h3",{id:"install-platon-mtool"},"Install PlatON MTool"),(0,l.kt)("p",null,"Proceed as follows:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1. Download PlatON MTool toolkit")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://download.platon.network/platon/devnet/mtool/linux/1.1.0/platon_mtool.zip\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2. Extract the PlatON MTool toolkit")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"(if ! command -v unzip;then sudo apt install unzip; fi;) && unzip platon_mtool.zip && cd platon_mtool\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3. Download script")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The script is downloaded to the ",(0,l.kt)("font",{color:"red"},"platon_mtool")," directory, otherwise the script cannot find the path of the new version of mtool.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://download.platon.network/platon/scripts/mtool_install.sh\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4. Execute command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x mtool_install.sh && ./mtool_install.sh\n")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"When the message ",(0,l.kt)("font",{color:"red"},"Install platon mtool succeed.")," is displayed, PlatON MTool is successfully installed. If it is not successfully installed, please contact our official customer service to provide feedback on specific issues."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step5. Restart the session window")),(0,l.kt)("p",null,"After installation is complete, you need to ",(0,l.kt)("font",{color:"red"},"restart the session window (do not restart the server, close the session window or SSH tool to reopen the window)")," for the newly added environment variables to take effect."),(0,l.kt)("h3",{id:"configure-platon-mtool"},"Configure PlatON MTool"),(0,l.kt)("h4",{id:"generate-wallet"},"Generate wallet"),(0,l.kt)("p",null,"To participate in the verification node to produce blocks, two wallets must be created. ",(0,l.kt)("font",{color:"red"}," If you want to create a node using an existing wallet, rename the wallet file for the mortgaging account to ",(0,l.kt)("inlineCode",{parentName:"p"},"staking.json"),", rename the wallet file for the income account to ",(0,l.kt)("inlineCode",{parentName:"p"},"reward.json"),", and copy the wallet file to the ",(0,l.kt)("inlineCode",{parentName:"p"},"$PLATON_MTOOLDIR/keystore")," directory to")," ",(0,l.kt)("a",{parentName:"p",href:"#configure-verification-node-information"},"skip this step"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Staking wallet: The staking wallet is used to stake tokens. To become a candidate node, you must stake successfully. Run the following command to create a staking wallet:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon_mtool account new staking\n")),(0,l.kt)("p",null,"Enter the password once and confirm the password again to create a wallet file. After the creation is successful, a staking wallet file ",(0,l.kt)("inlineCode",{parentName:"p"},"staking.json")," will be generated in the directory",(0,l.kt)("inlineCode",{parentName:"p"}," $PLATON_MTOOLDIR/keystore"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reward wallet: It is used to collect block rewards and staking rewards. Staking rewards are uniformly distributed to verification nodes, which are distributed by the verification nodes themselves. Run the following command to create a reward wallet")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon_mtool account new reward\n")),(0,l.kt)("p",null,"Enter the password once and confirm the password again to create the wallet file. After the creation is successful, the staking wallet file ",(0,l.kt)("inlineCode",{parentName:"p"},"reward.json")," will be generated in the directory",(0,l.kt)("inlineCode",{parentName:"p"}," $PLATON_MTOOLDIR/keystore"),"."),(0,l.kt)("h4",{id:"update-configproperties"},"Update config.properties"),(0,l.kt)("p",null,"If you want to run mtool on the development network, change the chain ID in the config.properties file to 210309"),(0,l.kt)("h4",{id:"configure-verification-node-information"},"Configure verification node information"),(0,l.kt)("h5",{id:"download-the-script"},"Download the script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $PLATON_MTOOLDIR && wget https://download.platon.network/platon/scripts/validator_conf.sh\n")),(0,l.kt)("h5",{id:"run-the-script-configuration"},"Run the script configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x validator_conf.sh && ./validator_conf.sh\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},'When  the prompt shows "Please enter the platon node IP address:", please enter the PlatON node server ip address.'),(0,l.kt)("li",{parentName:"ul"},'When  the prompt shows "validator conf success",  and when the validator_config.json content printed at the end is normal, it means that the script is executed successfully. If the script is not executed successfully, please contact our official customer service to feedback specific questions.'))),(0,l.kt)("h5",{id:"validator-node-information-configuration-file-description"},"Validator node information configuration file description"),(0,l.kt)("p",null,"After the configuration of the validator node information is completed, the validator node information file validator_config.json will be generated in the validator subdirectory of the PlatON MTool installation directory. The file content is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "nodePublicKey": "0abaf3219f454f3d07b6cbcf3c10b6b4ccf605202868e2043b6f5db12b745df0604ef01ef4cb523adc6d9e14b83a76dd09f862e3fe77205d8ac83df707969b47",\n    "blsPubKey": "82d740cbc0314ec558c5426f88fdad6f07a07f9846c6be4e40cd628b74b9f641ddad01e4c281a2c3693f8ff2a73a410297aff379ee0575127d51de99b97acc9a1b7bc8ca132ef6f0379a3ec9d76a603d623176e49e1c53e87fead36317895099",\n    "nodeAddress": "http://192.168.120.146",\n    "nodePort": "16789",\n    "nodeRpcPort": "6789"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Parameter description:")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"nodePublicKey: Node ID, which can be viewed in the nodeid file under the node data directory data"),(0,l.kt)("li",{parentName:"ul"},"blsPubKey: BLS public key, which can be viewed in the blspub file under the node data directory data."),(0,l.kt)("li",{parentName:"ul"},"nodeAddress: If PlatON MTool and the node are on the same machine or in the same local area network, you can use the intranet IP, otherwise use the public IP whose format is: ",(0,l.kt)("inlineCode",{parentName:"li"},"http://18.238.183.12"),"."),(0,l.kt)("li",{parentName:"ul"},"nodePort: Node P2P port, default is 16789."),(0,l.kt)("li",{parentName:"ul"},"nodeRpcPort: rpc port, the default port is 6789."))),(0,l.kt)("h5",{id:"custom-platscan-avatar"},"Custom PlatScan avatar"),(0,l.kt)("p",null,"If users do not need to display their specified avatar on PlatScan, they can skip this step. Otherwise, the following operations are required:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Register a keybase account")),(0,l.kt)("p",{parentName:"li"},"Users first need to register on the official website of  ",(0,l.kt)("a",{parentName:"p",href:"https://keybase.io/"},"keybase.io")," . If they have already registered, they can log on the official website of keybase.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Upload specified avatar")),(0,l.kt)("p",{parentName:"li"},"Click the user avatar to upload the avatar.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Generate PGP key")),(0,l.kt)("p",{parentName:"li"},"If the user has a ",(0,l.kt)("inlineCode",{parentName:"p"},"PGP key"),", after a successful login, a series of 16-bit public keys will be displayed next to the user's avatar, such as: ",(0,l.kt)("inlineCode",{parentName:"p"},"EB621920A48D0699"),"; if the user does not already have a ",(0,l.kt)("inlineCode",{parentName:"p"},"PGP key"),", click ",(0,l.kt)("inlineCode",{parentName:"p"},"add a PGP key")," next to the user's avatar to generate.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Specify the externalId value")),(0,l.kt)("p",{parentName:"li"},"When issuing the staking operation, specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"--external_id")," parameter to be the PGP key generated in the previous step."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: After the user completes the staking operation, the avatar customized by the user can be displayed on PlatScan.")),(0,l.kt)("h3",{id:"initiate-a-staking-operation"},"Initiate a staking operation"),(0,l.kt)("p",null,"If the consensus node deployment is complete and is catching up the blocknumber of ",(0,l.kt)("a",{parentName:"p",href:"https://scan.platon.network/?lang=en"},"Platscan"),", you can use PlatON MTool for staking operations. Please ensure that the balance of the staking account is sufficient before staking. The minimum threshold for staking is one hundred thousand LAT. If you want to access the development network, please send an email to ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@latticex.foundation"},"support@latticex.foundation")," according to the format requirements. The email requirements are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},"Title: Platon Development Network Token Application\nName:\nContact Information:\nWeChat ID (or other instant messaging software) :\nApplication amount:\nUSES:\nReceipt account:\nRemark:\n")),(0,l.kt)("p",null,"Note: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Testing LAT has no value and is limited to experiencing test network features.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Please keep at least 1 LAT in the staking account, so that the transactions initiated by the subsequent node management have sufficient transaction fees, such as voting for upgrade proposals, and unsecured transactions."))),(0,l.kt)("p",null,"Excuting command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon_mtool staking --config $PLATON_MTOOLDIR/validator/validator_config.json --keystore $PLATON_MTOOLDIR/keystore/staking.json --autoamount 100000 --benefit_address xxx196278ns22j23awdfj9f2d4vz0pedld8a2fzwwj --delegated_reward_rate 5000 --node_name myNode --website www.mywebsite.com --details myNodeDescription --external_id 121412312\n")),(0,l.kt)("p",null,"Enter the password of the staking wallet and press Enter. If the following information is displayed, the staking is successful:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"operation finished\ntransaction hash:\n0x89b964d27d0caf1d8bf268f721eb123c4af57aed36187bea90b262f4769eeb9b\nSUCCESS\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Parameter description:")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"config\uff1anode configuration file"),(0,l.kt)("li",{parentName:"ul"},"keystore: staking wallet file"),(0,l.kt)("li",{parentName:"ul"},"amount: staking amount, not less than 100000LAT-staking threshold, no more than 8 decimal places"),(0,l.kt)("li",{parentName:"ul"},"restrictedamount: not less than 100000LAT - staking threshold, no more than 8 decimal points (staking using locked balance)"),(0,l.kt)("li",{parentName:"ul"},"autoamount: Not less than 10000LAT-Priority to use the lock-up balance staking, if the lock-up balance is not enough for the staking deposit, then use free amount staking"),(0,l.kt)("li",{parentName:"ul"},"benefit_address: benefit account to receive block-packing reward and staking reward"),(0,l.kt)("li",{parentName:"ul"},"delegated_reward_rate\uff1aDelegated bonus ratio, type is integer range is ","[","0,10000","]",", unit: ten thousand percent, e.g. enter 5000, it means the bonus ratio is 50%"),(0,l.kt)("li",{parentName:"ul"},"node",(0,l.kt)("em",{parentName:"li"},"name\uff1anode name\uff0c30 bytes(beginning with a letter, including alphabet, number, space, "),", -, #)"),(0,l.kt)("li",{parentName:"ul"},"website\uff1anode website, 30 bytes"),(0,l.kt)("li",{parentName:"ul"},"details\uff1anode description, 280 bytes"),(0,l.kt)("li",{parentName:"ul"},"external_id\uff1anode Icon ID of ",(0,l.kt)("a",{parentName:"li",href:"https://keybase.io"},"keybase.io"),", or identity authentication ID"))))}c.isMDXComponent=!0}}]);