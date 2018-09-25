module.exports = {
    contractABI: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "myid",
                    "type": "bytes32"
                },
                {
                    "name": "result",
                    "type": "string"
                }
            ],
            "name": "__callback",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "myid",
                    "type": "bytes32"
                },
                {
                    "name": "result",
                    "type": "string"
                },
                {
                    "name": "proof",
                    "type": "bytes"
                }
            ],
            "name": "__callback",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                },
                {
                    "name": "_startTime",
                    "type": "uint256"
                }
            ],
            "name": "addMatch",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                },
                {
                    "name": "_onRadiant",
                    "type": "bool"
                }
            ],
            "name": "bet",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "changeRole",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                },
                {
                    "name": "_radiantWin",
                    "type": "bool"
                }
            ],
            "name": "endMatch",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchIdString",
                    "type": "string"
                },
                {
                    "name": "_matchIdUint",
                    "type": "uint256"
                }
            ],
            "name": "getMatchWinner",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "getRemainingPricePool",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipRenounced",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "log",
                    "type": "string"
                }
            ],
            "name": "LogNewOraclizeQuery",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                },
                {
                    "name": "_onRadiant",
                    "type": "bool"
                }
            ],
            "name": "refund",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "startMatch",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                },
                {
                    "name": "_amountWithdraw",
                    "type": "uint256"
                }
            ],
            "name": "withdrawWinnings",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addressIsAdmin",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "getOwnBets",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "getTeamBets",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "matches",
            "outputs": [
                {
                    "name": "matchId",
                    "type": "uint256"
                },
                {
                    "name": "poolPrice",
                    "type": "uint256"
                },
                {
                    "name": "radiantBets",
                    "type": "uint256"
                },
                {
                    "name": "direBets",
                    "type": "uint256"
                },
                {
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "name": "radiantWin",
                    "type": "bool"
                },
                {
                    "name": "direWin",
                    "type": "bool"
                },
                {
                    "name": "withdrawable",
                    "type": "bool"
                },
                {
                    "name": "bettable",
                    "type": "bool"
                },
                {
                    "name": "refundable",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "matchesNumber",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "matchIdToId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "selectedMatchId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    contractBytecode: "6080604052336000806101000a815481600160a060020a030219169083600160a060020a0316021790555060016006600033600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908315150217905550612669806100776000396000f30060806040526004361061010e5763ffffffff60e060020a600035041663038b2c92811461011357806312388626146101355780631b30ca291461016057806327dc297e1461019057806331e0c5331461020057806338bbfa50146102185780633991c09d146102c65780634768d4ef146102e45780635b828532146103655780636c9c5270146103bc578063715018a6146103cf5780638da5cb5b146103e45780638f32d59b146104215780639a6d3aaa1461044d578063a305d71914610460578063b5c4b23d14610481578063bf725a84146104a2578063cdd0f1d0146104ba578063e0a27b2c146104cf578063ec781f0f146104e0578063f2fde38b146104f5578063f6c4d96514610516575b600080fd5b34801561011f57600080fd5b506101336004803590602001351515610521565b005b34801561014157600080fd5b5061014d6004356105bc565b6040805191825251602090910181900390f35b34801561016c57600080fd5b506101786004356105ce565b60408051928352602092830191825251910181900390f35b34801561019c57600080fd5b506101336004803603810190808035600019169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437509497506106199650505050505050565b34801561020c57600080fd5b50610178600435610897565b34801561022457600080fd5b506101336004803603810190808035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f89358b018035918201839004830283018401909452808352979a9998810197919650918201945092508291508401838280828437509497506109289650505050505050565b3480156102d257600080fd5b5061013360048035906020013561092d565b3480156102f057600080fd5b506102fc600435610aaf565b604051808b81526020018a815260200189815260200188815260200187815260200186151515158152602001851515151581526020018415151515815260200183151515158152602001821515151581526020019a505050505050505050505060405180910390f35b610133600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437509497505093359450610b299350505050565b6101336004803590602001351515610d89565b3480156103db57600080fd5b50610133610eaf565b3480156103f057600080fd5b506103f9610f35565b6040518082600160a060020a0316600160a060020a0316815260200191505060405180910390f35b34801561042d57600080fd5b50610436610f4f565b604080519115151515825251602090910181900390f35b6101336004803590602001351515610f7f565b34801561046c57600080fd5b50610133600160a060020a036004351661122f565b34801561048d57600080fd5b50610436600160a060020a03600435166112c1565b3480156104ae57600080fd5b506101336004356112e1565b3480156104c657600080fd5b5061014d611398565b61013360048035906020013561139e565b3480156104ec57600080fd5b5061014d61164d565b34801561050157600080fd5b50610133600160a060020a0360043516611653565b610133600435611672565b60006006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156001151514151561056857600080fd5b6008600760008581526020019081526020016000205481548110151561058a57fe5b90600052602060002090600a0201905060018160050160026101000a81548160ff021916908315150217905550505050565b60076020526000908152604090205481565b6000806000600860076000868152602001908152602001600020548154811015156105f557fe5b90600052602060002090600a02019050806002015481600301549250925050915091565b6000610623611728565b600160a060020a031633600160a060020a031614151561064257600080fd5b604051600080820182900382208451911916918491819060208401908083835b6020831015156106815780518252602092839003929182019101610662565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916141515156106bf57600080fd5b6008600760006009548152602001908152602001600020548154811015156106e357fe5b90600052602060002090600a0201905060405180807f52616469616e74000000000000000000000000000000000000000000000000008152506007019050604051809103902060001916826040518082805190602001908083835b60208310151561075d578051825260209283900392918201910161073e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191614156107b65760018160050160006101000a81548160ff021916908315150217905550610875565b60405180807f44697265000000000000000000000000000000000000000000000000000000008152506004019050604051809103902060001916826040518082805190602001908083835b6020831015156108205780518252602092839003929182019101610801565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191614156108755760018160050160016101000a81548160ff0219169083151502179055505b60018160050160026101000a81548160ff021916908315150217905550505050565b6000806000600860076000868152602001908152602001600020548154811015156108be57fe5b90600052602060002090600a0201905080600601600033600160a060020a0316600160a060020a031681526020019081526020016000205481600701600033600160a060020a0316600160a060020a03168152602001908152602001600020549250925050915091565b505050565b610935612549565b6000836007600082815260200190815260200160002054600014151561095a57600080fd5b6006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156001151514151561099f57600080fd5b505060008082018481526001801515151561010080860182815261012087019283526080870197885260088054850180825590875260208088209651600a92879003928302909701808901979097558089015187870155604089015160028089019190915560608a01516003808a01919091559a516004808a019190915560a08b01516005909901805460c08d015160e0909d015196519851151592880a92830260ff938402199915159e890a9e8f029e84021997151594890a948502948402199d15159a890a9a8b029a8402199b1515988d900a988902939098021916919091179890981696909617989098169490941716969096171694909417905592835260078184019081520190912055565b600881815481101515610abe57fe5b600091825260208220600a9091020180820154600180830154600280850154600380870154600480890154600590990154979a50949892979096909560ff61010094850a830481169691850a8304811695850a830481169493840a83048116939190910a909104168a565b60608030600160a060020a031631610b756040805190810160405280600381526020017f55524c000000000000000000000000000000000000000000000000000000000081525061194b565b1115610be557604080517f08c379a00000000000000000000000000000000000000000000000000000000081526004016020808201828103909252601282527f4e6f7420656e6f7567682062616c616e636500000000000000000000000000009181019182529151910181900390fd5b7f621c2856e3b87f81235f8ac8a22bbb40a0142961960710d00b2b6c380902b57e6040518080602001828103825260358152602001807f4f7261636c697a65207175657279207761732073656e742c207374616e64696e81526020017f6720627920666f722074686520616e737765722e2e000000000000000000000081525060400191505060405180910390a1610cf0610c7f85611bdc565b610ce4606060405190810160405280603a81526020017f6a736f6e2868747470733a2f2f626f756e74792d72756e652d6272696467652e81526020017f6865726f6b756170702e636f6d2f726573756c742f646f74612f000000000000815250611bdc565b9063ffffffff611c0216565b9150610d3c610d336040805190810160405280600881526020017f292e77696e6e6572000000000000000000000000000000000000000000000000815250611bdc565b610ce484611bdc565b600984905560408051808201909152600381527f55524c00000000000000000000000000000000000000000000000000000000006020820152909150610d829082611c7c565b5050505050565b60008060086007600086815260200190815260200160002054815481101515610dae57fe5b90600052602060002090600a020191508215610e025750600160a060020a03338116166000818152600683016020808301828152908101808420546002870180548290039055948452919052812055610e3c565b50600160a060020a033381161660008181526007830160208083018281529081018084205460038701805482900390559484529190528120555b600160a060020a033381169081166000908152600884016020808301918252018120805482151561010084900a90810260ff90910219909116179055600184018054849003905560405183156108fc02918491908180800381858888f19350505050158015610d82573d6000803e3d6000fd5b610eb7610f4f565b1515610ec257600080fd5b6000809054906101000a9004600160a060020a0316600160a060020a03167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a815481600160a060020a030219169083600160a060020a03160217905550565b60008054600160a060020a036101009290920a9004165b90565b60008060009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614905090565b600082610f8a612549565b60086007600084815260200190815260200160002054815481101515610fac57fe5b90600052602060002090600a0201610140604051908101604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff161515151581526020016005820160019054906101000a900460ff161515151581526020016005820160029054906101000a900460ff161515151581526020016005820160039054906101000a900460ff161515151581526020016005820160049054906101000a900460ff161515151581525050905080610100015115156001151514151561109a57600080fd5b8061012001511515600115151415156110b257600080fd5b846000600860076000848152602001908152602001600020548154811015156110d757fe5b90600052602060002090600a0201905080600801600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156000151514151561112e57600080fd5b6008600760008981526020019081526020016000205481548110151561115057fe5b90600052602060002090600a02019450851561119f57600160a060020a0333811616600090815260068601602080830191825201902080543490810190915560028601805490910190556111d4565b600160a060020a0333811616600090815260078601602080830191825201902080543490810190915560038601805490910190555b348560010160008282540192505081905550600185600801600033600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff02191690831515021790555050505050505050565b6006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156001151514151561127457600080fd5b600160a060020a0390811616600081815260066020808301828152908101808420549484529190528120805460ff6101009390930a93849004831615151584029290930219909216179055565b60066020528060005260406000206000915054906101000a900460ff1681565b60006006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156001151514151561132857600080fd5b6008600760008481526020019081526020016000205481548110151561134a57fe5b90600052602060002090600a0201905060008160050160036101000a81548160ff02191690831515021790555060008160050160046101000a81548160ff0219169083151502179055505050565b60095481565b6000826000600860076000848152602001908152602001600020548154811015156113c557fe5b90600052602060002090600a0201905080600901600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156000151514151561141c57600080fd5b8460006008600760008481526020019081526020016000205481548110151561144157fe5b90600052602060002090600a0201905080600801600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156001151514151561149857600080fd5b86866000600860076000858152602001908152602001600020548154811015156114be57fe5b90600052602060002090600a020190508181600601600033600160a060020a0316600160a060020a031681526020019081526020016000205410158061152b57508181600701600033600160a060020a0316600160a060020a031681526020019081526020016000205410155b8061153a575081816001015410155b151561154557600080fd5b6008600760008c81526020019081526020016000205481548110151561156757fe5b90600052602060002090600a020197508760050160009054906101000a900460ff1615156001151514806115b057508760050160019054906101000a900460ff16151560011515145b15156115bb57600080fd5b600188600901600033600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff02191690831515021790555033600160a060020a03166108fc8a9081150290604051600060405180830381858888f19350505050158015611634573d6000803e3d6000fd5b5050506001909501805496909603909555505050505050565b60085490565b61165b610f4f565b151561166657600080fd5b61166f81612094565b50565b60006006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff161515600115151415156116b957600080fd5b600860076000848152602001908152602001600020548154811015156116db57fe5b90600052602060002090600a0201905033600160a060020a03166108fc82600101549081150290604051600060405180830381858888f19350505050158015610928573d6000803e3d6000fd5b6000600160009054906101000a9004600160a060020a0316600160a060020a0316600014806117745750611770600160009054906101000a9004600160a060020a0316612133565b6000145b15611785576117836000612137565b505b600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156117d857600080fd5b505af11580156117ec573d6000803e3d6000fd5b505050506040513d602081101561180257600080fd5b505160025460006101000a9004600160a060020a03908116811691161415156118c757600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561187857600080fd5b505af115801561188c573d6000803e3d6000fd5b505050506040513d60208110156118a257600080fd5b505160028054600160a060020a0392831660006101000a908102930219169190911790555b600260009054906101000a9004600160a060020a0316600160a060020a031663c281d19e6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561191a57600080fd5b505af115801561192e573d6000803e3d6000fd5b505050506040513d602081101561194457600080fd5b5051905090565b6000600160009054906101000a9004600160a060020a0316600160a060020a0316600014806119975750611993600160009054906101000a9004600160a060020a0316612133565b6000145b156119a8576119a66000612137565b505b600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156119fb57600080fd5b505af1158015611a0f573d6000803e3d6000fd5b505050506040513d6020811015611a2557600080fd5b505160025460006101000a9004600160a060020a0390811681169116141515611aea57600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611a9b57600080fd5b505af1158015611aaf573d6000803e3d6000fd5b505050506040513d6020811015611ac557600080fd5b505160028054600160a060020a0392831660006101000a908102930219169190911790555b600260009054906101000a9004600160a060020a0316600160a060020a031663524f3889836040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b5e578181015183820152602001611b46565b50505050905090810190601f168015611b8b5780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015611baa57600080fd5b505af1158015611bbe573d6000803e3d6000fd5b505050506040513d6020811015611bd457600080fd5b505192915050565b611be461258e565b50604080518082019091528151815260209182019181019190915290565b606080600083600001518560000151016040519080825280601f01601f191660200182016040528015611c3f578160200160208202803883390190505b509150602082019050611c5b8186602001518760000151612147565b611c748560000151820185602001518660000151612147565b509392505050565b600080600160009054906101000a9004600160a060020a0316600160a060020a031660001480611cc95750611cc5600160009054906101000a9004600160a060020a0316612133565b6000145b15611cda57611cd86000612137565b505b600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611d2d57600080fd5b505af1158015611d41573d6000803e3d6000fd5b505050506040513d6020811015611d5757600080fd5b505160025460006101000a9004600160a060020a0390811681169116141515611e1c57600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611dcd57600080fd5b505af1158015611de1573d6000803e3d6000fd5b505050506040513d6020811015611df757600080fd5b505160028054600160a060020a0392831660006101000a908102930219169190911790555b600260009054906101000a9004600160a060020a0316600160a060020a031663524f3889856040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611e90578181015183820152602001611e78565b50505050905090810190601f168015611ebd5780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015611edc57600080fd5b505af1158015611ef0573d6000803e3d6000fd5b505050506040513d6020811015611f0657600080fd5b50519050670de0b6b3a764000062030d403a0201811115611f2d576000600102915061208d565b600260009054906101000a9004600160a060020a0316600160a060020a031663adf59f9982600087876040518563ffffffff1660e060020a028152600401808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611faf578181015183820152602001611f97565b50505050905090810190601f168015611fdc5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561200f578181015183820152602001611ff7565b50505050905090810190601f16801561203c5780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303818588803b15801561205d57600080fd5b505af1158015612071573d6000803e3d6000fd5b50505050506040513d602081101561208857600080fd5b505191505b5092915050565b6000600160a060020a031681600160a060020a0316141515156120b657600080fd5b80600160a060020a03166000809054906101000a9004600160a060020a0316600160a060020a03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a815481600160a060020a030219169083600160a060020a0316021790555050565b3b90565b600061214161218b565b92915050565b60005b60208210151561216b5782518452602093840193928301929091039061214a565b509051825160016020939093036101000a92909203918216911916179052565b6000806121ab731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed612133565b111561223257731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed600160006101000a815481600160a060020a030219169083600160a060020a0316021790555061222a6040805190810160405280600b81526020017f6574685f6d61696e6e6574000000000000000000000000000000000000000000815250612532565b506001610f4c565b600061225173c03a2615d5efaf5f49f60b7bb6583eaec212fdf1612133565b11156122d05773c03a2615d5efaf5f49f60b7bb6583eaec212fdf1600160006101000a815481600160a060020a030219169083600160a060020a0316021790555061222a6040805190810160405280600c81526020017f6574685f726f707374656e330000000000000000000000000000000000000000815250612532565b60006122ef73b7a07bcf2ba2f2703b24c0691b5278999c59ac7e612133565b111561236e5773b7a07bcf2ba2f2703b24c0691b5278999c59ac7e600160006101000a815481600160a060020a030219169083600160a060020a0316021790555061222a6040805190810160405280600981526020017f6574685f6b6f76616e0000000000000000000000000000000000000000000000815250612532565b600061238d73146500cfd35b22e4a392fe0adc06de1a1368ed48612133565b111561240c5773146500cfd35b22e4a392fe0adc06de1a1368ed48600160006101000a815481600160a060020a030219169083600160a060020a0316021790555061222a6040805190810160405280600b81526020017f6574685f72696e6b656279000000000000000000000000000000000000000000815250612532565b600061242b736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475612133565b111561246c575060018054600160a060020a03736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475811660006101000a908102910219909116178155610f4c565b600061248b7320e12a1f859b3feae5fb2a0a32c18f5a65555bbf612133565b11156124cc575060018054600160a060020a037320e12a1f859b3feae5fb2a0a32c18f5a65555bbf811660006101000a908102910219909116178155610f4c565b60006124eb7351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa612133565b111561252c575060018054600160a060020a037351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa811660006101000a908102910219909116178155610f4c565b50600090565b80516125459060039060208401906125a5565b5050565b60408051610140810190915260008082526020808301828152810182815281018281528101828152911515918101828152810182815281018281528101828152015290565b604080518082019091526000808252602082015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106125e657805160ff1916838001178555612613565b82800160010185558215612613579182015b828111156126135782518255916020019190600101906125f8565b5061261f929150612623565b5090565b610f4c91905b8082111561261f57600081556001016126295600a165627a7a72305820af656abbcbf054dbea8e7fab0608fa017833dfa0ddf1f213f6cf50a2657873280029",
    contractAddress: "0xc5006c62559fcd2507e317181bb33e8616941c94",
    ropstenProvider: "https://ropsten.infura.io/v3/559285613abd4d2dac598ba388a26a70"
};