const majorMenu: any[] = [
  {
    id: "01",
    name: "基础管理",
    url: "/base",
    parent_id: "",
    children: [
      {
        id: "0101",
        name: "操作者管理",
        url: "/base/operatorManagement",
        parent_id: "01",
        children: [
          {
            id: "010101",
            name: "操作者列表",
            url: "/base/operatorManagement/operator",
            parent_id: "0101",
            permissions: [
              {
                id: "01010101",
                menu_id: "010101",
                name: "查看",
                api_url: ["/cms/api/def/user/getUserList"]
              },
              {
                id: "01010102",
                menu_id: "010101",
                name: "新增",
                api_url: ["/cms/api/def/user/addUser"]
              },
              {
                id: "01010103",
                menu_id: "010101",
                name: "删除",
                api_url: ["/cms/api/def/user/delUser"]
              },
              {
                id: "01010104",
                menu_id: "010101",
                name: "编辑",
                api_url: ["/cms/api/def/user/editUser", "/cms/api/def/user/changePassword"]
              }
            ]
          },
          {
            id: "010102",
            name: "角色管理",
            url: "/base/operatorManagement/role",
            parent_id: "0101",
            permissions: [
              {
                id: "01010201",
                menu_id: "010102",
                name: "查看",
                api_url: ["/cms/api/def/role/getRoleList"]
              },
              {
                id: "01010202",
                menu_id: "010102",
                name: "新增",
                api_url: ["/cms/api/def/role/addRole"]
              },
              {
                id: "01010203",
                menu_id: "010102",
                name: "删除",
                api_url: ["/cms/api/def/role/delRole"]
              },
              {
                id: "01010204",
                menu_id: "010102",
                name: "编辑",
                api_url: ["/cms/api/def/role/editRole"]
              }
            ]
          }
        ]
      },
      {
        id: "0102",
        name: "日志管理",
        url: "/base/logs",
        parent_id: "01",
        children: [
          {
            id: "010201",
            name: "用户日志",
            url: "/base/logs/userlogs",
            parent_id: "0102",
            permissions: [
              {
                id: "01020101",
                menu_id: "010201",
                name: "查看",
                api_url: ["/cms/api/def/logger/getOperationLogs"]
              }
            ]
          },
          {
            id: "010202",
            name: "系统日志",
            url: "/base/logs/system_logs",
            parent_id: "0102",
            permissions: [
              {
                id: "01020201",
                menu_id: "010202",
                name: "查看",
                api_url: ["/cms/api/def/logger/getSystemLogs"]
              }
            ]
          }
        ]
      },
      {
        id: "0103",
        name: "系统消息",
        url: "/base/system_message",
        parent_id: "01",
        permissions: [
          {
            id: "010301",
            menu_id: "0103",
            name: "查看",
            api_url: ["/cms/api/def/system/getMessageList"]
          },
          {
            id: "010302",
            menu_id: "0103",
            name: "新增",
            api_url: ["/cms/api/def/system/sendMessage"]
          },
          {
            id: "010303",
            menu_id: "0103",
            name: "删除",
            api_url: ["/cms/api/def/system/delMessage"]
          }
        ]
      },
      {
        id: "0104",
        name: "行业管理",
        url: "/base/industry",
        parent_id: "01",
        children: [
          {
            id: "010401",
            name: "行业分组",
            url: "/base/industry/grouping",
            parent_id: "0104",
            permissions: [
              {
                id: "01040101",
                menu_id: "010401",
                name: "查看",
                api_url: [
                  "/cms/api/def/tradeGroup/getTradeGroupList",
                  "def/tradeGroup/getTradeGroupById"
                ]
              },
              {
                id: "01040102",
                menu_id: "010401",
                name: "新增",
                api_url: ["/cms/api/def/tradeGroup/addTradeGroup"]
              },
              {
                id: "01040103",
                menu_id: "010401",
                name: "删除",
                api_url: ["/cms/api/def/tradeGroup/delTradeGroup"]
              },
              {
                id: "01040104",
                menu_id: "010401",
                name: "编辑",
                api_url: [
                  "/cms/api/def/tradeGroup/editTradeGroup",
                  "/cms/api/def/tradeGroup/setTradeGroupStatus"
                ]
              },
              {
                id: "01040105",
                menu_id: "010401",
                name: "导入",
                api_url: [
                  "/cms/api/def/tradeGroup/importTradeGroup",
                  "/cms/api/def/tradeGroup/importFile"
                ]
              }
            ]
          },
          {
            id: "010402",
            name: "行业分类",
            url: "/base/industry/classification",
            parent_id: "0104",
            permissions: [
              {
                id: "01040201",
                menu_id: "010402",
                name: "查看",
                api_url: ["/cms/api/def/trade/getTradeList", "/cms/api/def/trade/getTradeById"]
              },
              {
                id: "01040202",
                menu_id: "010402",
                name: "新增",
                api_url: ["/cms/api/def/trade/addTrade"]
              },
              {
                id: "01040203",
                menu_id: "010402",
                name: "删除",
                api_url: ["/cms/api/def/trade/delTrade"]
              },
              {
                id: "01040204",
                menu_id: "010402",
                name: "编辑",
                api_url: ["/cms/api/def/trade/editTrade"]
              }
            ]
          },
          {
            id: "010403",
            name: "终端用户账号管理",
            url: "/base/industry/account_manage",
            parent_id: "0104",
            permissions: [
              {
                id: "01040301",
                menu_id: "010403",
                name: "查看",
                api_url: [
                  "/cms/api/def/iptvAccount/getIptvAccountList",
                  "/cms/api/def/iptvAccount/getIptvAccountById"
                ]
              },
              {
                id: "01040302",
                menu_id: "010403",
                name: "新增",
                api_url: ["/cms/api/def/iptvAccount/addIptvAccount"]
              },
              {
                id: "01040303",
                menu_id: "010403",
                name: "删除",
                api_url: ["/cms/api/def/iptvAccount/delIptvAccount"]
              },
              {
                id: "01040304",
                menu_id: "010403",
                name: "编辑",
                api_url: ["/cms/api/def/iptvAccount/editIptvAccount"]
              }
            ]
          }
        ]
      },
      {
        id: "0105",
        name: "系统参数",
        url: "/base/system_param",
        parent_id: "01",
        permissions: [
          {
            id: "010501",
            menu_id: "0105",
            name: "查看",
            api_url: ["/cms/api/def/system/getParameters"]
          },
          {
            id: "010502",
            menu_id: "0105",
            name: "新增",
            api_url: ["/cms/api/def/system/addParameters"]
          },
          {
            id: "010504",
            menu_id: "0105",
            name: "编辑",
            api_url: ["/cms/api/def/system/editParameters"]
          }
        ]
      },
      {
        id: "0106",
        name: "运营商管理",
        url: "/base/networkOperator",
        parent_id: "01",
        permissions: [
          {
            id: "010601",
            menu_id: "0106",
            name: "查看",
            api_url: [
              "/cms/api/def/networkOperator/getOperatorList",
              "/cms/api/def/networkOperator/getOperatorById"
            ]
          },
          {
            id: "010602",
            menu_id: "0106",
            name: "新增",
            api_url: ["/cms/api/def/networkOperator/addOperator"]
          },
          {
            id: "010604",
            menu_id: "0106",
            name: "编辑",
            api_url: [
              "/cms/api/def/networkOperator/editOperator",
              "/cms/api/def/networkOperator/setStatus"
            ]
          }
        ]
      },
      {
        id: "0107",
        name: "SP/CP管理",
        url: "/base/SPCP",
        parent_id: "01",
        children: [
          {
            id: "010701",
            name: "SP管理",
            url: "/base/SPCP/SPManagement",
            parent_id: "0107",
            permissions: [
              {
                id: "01070101",
                menu_id: "010701",
                name: "查看",
                api_url: ["/cms/api/def/provider/getSPList", "/cms/api/def/provider/getSPById"]
              },
              {
                id: "01070102",
                menu_id: "010701",
                name: "新增",
                api_url: ["/cms/api/def/provider/addSP"]
              },
              {
                id: "01070104",
                menu_id: "010701",
                name: "编辑",
                api_url: ["/cms/api/def/provider/editSP", "/cms/api/def/provider/setSPStatus"]
              }
            ]
          },
          {
            id: "010702",
            name: "CP管理",
            url: "/base/SPCP/CPManagement",
            parent_id: "0107",
            permissions: [
              {
                id: "01070201",
                menu_id: "010702",
                name: "查看",
                api_url: ["/cms/api/def/provider/getCPList", "/cms/api/def/provider/getCPById"]
              },
              {
                id: "01070202",
                menu_id: "010702",
                name: "新增",
                api_url: ["/cms/api/def/provider/addCP"]
              },
              {
                id: "01070204",
                menu_id: "010702",
                name: "编辑",
                api_url: ["/cms/api/def/provider/editCP", "/cms/api/def/provider/setCPStatus"]
              }
            ]
          }
        ]
      },
      {
        id: "0108",
        name: "计费营帐管理",
        url: "/base/revenue",
        parent_id: "01",
        children: [
          {
            id: "010801",
            name: "产品包管理",
            url: "/base/revenue/productPackage",
            parent_id: "0108",
            permissions: [
              {
                id: "01080101",
                menu_id: "010801",
                name: "查看",
                api_url: [
                  "/cms/api/def/product/getProductList",
                  "/cms/api/def/product/getProductById"
                ]
              },
              {
                id: "01080102",
                menu_id: "010801",
                name: "新增",
                api_url: ["/cms/api/def/product/addProduct"]
              },
              {
                id: "01080104",
                menu_id: "010801",
                name: "编辑",
                api_url: ["/cms/api/def/product/editProduct"]
              }
            ]
          },
          {
            id: "010802",
            name: "营收统计",
            url: "/base/revenue/incomeStatistic",
            parent_id: "0108",
            permissions: [
              {
                id: "01080201",
                menu_id: "010802",
                name: "查看",
                api_url: [
                  "/cms/api/def/revenueStatistics/getSPList",
                  "/cms/api/def/revenueStatistics/getTodayStatistics",
                  "/cms/api/def/revenueStatistics/getRevenueReport",
                  "/cms/api/def/revenueStatistics/getStatisticsDetails",
                  "/cms/api/def/revenueStatistics/getPieChart",
                  "/cms/api/def/revenueStatistics/getSPStatistics",
                  "/cms/api/def/revenueStatistics/getSPReport",
                  "/cms/api/def/revenueStatistics/getSPDetails",
                  "/cms/api/def/revenueStatistics/getOPStatistics",
                  "/cms/api/def/revenueStatistics/getOPReport",
                  "/cms/api/def/revenueStatistics/getOPDetails"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "02",
    name: "内容管理",
    url: "/content",
    parent_id: "",
    children: [
      {
        id: "0201",
        name: "影片库管理",
        url: "/content/film_lib",
        parent_id: "02",
        children: [
          {
            id: "020101",
            name: "影片管理",
            url: "/content/film_lib/movie",
            parent_id: "0201",
            permissions: [
              {
                id: "02010101",
                menu_id: "020101",
                name: "查看",
                api_url: [
                  "/cms/api/def/program/getProgramList",
                  "/cms/api/def/program/getProgramById"
                ]
              },
              {
                id: "02010102",
                menu_id: "020101",
                name: "新增",
                api_url: ["/cms/api/def/program/addProgram"]
              },
              {
                id: "02010103",
                menu_id: "020101",
                name: "删除",
                api_url: ["/cms/api/def/program/delProgram"]
              },
              {
                id: "02010104",
                menu_id: "020101",
                name: "编辑",
                api_url: ["/cms/api/def/program/editProgram"]
              }
            ]
          },
          {
            id: "020102",
            name: "剧集管理",
            url: "/content/film_lib/series",
            parent_id: "0201",
            permissions: [
              {
                id: "02010201",
                menu_id: "020102",
                name: "查看",
                api_url: ["/cms/api/def/series/getSeriesList", "/cms/api/def/series/getSeriesById"]
              },
              {
                id: "02010202",
                menu_id: "020102",
                name: "新增",
                api_url: ["/cms/api/def/series/addSeries"]
              },
              {
                id: "02010203",
                menu_id: "020102",
                name: "删除",
                api_url: ["/cms/api/def/series/delSeries"]
              },
              {
                id: "02010204",
                menu_id: "020102",
                name: "编辑",
                api_url: ["/cms/api/def/series/editSeries"]
              }
            ]
          }
        ]
      },
      {
        id: "0202",
        name: "频道库管理",
        url: "/content/channel_lib",
        parent_id: "02",
        children: [
          {
            id: "020201",
            name: "频道管理",
            url: "/content/channel_lib/channel",
            parent_id: "0202",
            permissions: [
              {
                id: "02020101",
                menu_id: "020201",
                name: "查看",
                api_url: [
                  "/cms/api/def/channel/getChannelList",
                  "/cms/api/def/channel/getChannelById"
                ]
              },
              {
                id: "02020102",
                menu_id: "020201",
                name: "新增",
                api_url: ["/cms/api/def/channel/addChannel"]
              },
              {
                id: "02020103",
                menu_id: "020201",
                name: "删除",
                api_url: ["/cms/api/def/channel/delChannel"]
              },
              {
                id: "02020104",
                menu_id: "020201",
                name: "编辑",
                api_url: ["/cms/api/def/channel/editChannel"]
              },
              {
                id: "02020105",
                menu_id: "020201",
                name: "导入",
                api_url: ["/cms/api/def/channel/importChannel"]
              }
            ]
          },
          {
            id: "020202",
            name: "频道分组管理",
            url: "/content/channel_lib/channel_group",
            parent_id: "0202",
            permissions: [
              {
                id: "02020201",
                menu_id: "020202",
                name: "查看",
                api_url: [
                  "/cms/api/def/channelGroup/getChannelGroupList",
                  "/cms/api/def/channelGroup/getChannelGroupById",
                  "/cms/api/def/channelGroup/getSelectChannelList",
                  "/cms/api/def/channelGroup/addChannelList"
                ]
              },
              {
                id: "02020202",
                menu_id: "020202",
                name: "新增",
                api_url: ["/cms/api/def/channelGroup/addChannelGroup"]
              },
              {
                id: "02020203",
                menu_id: "020202",
                name: "删除",
                api_url: ["/cms/api/def/channelGroup/delChannelGroup"]
              },
              {
                id: "02020204",
                menu_id: "020202",
                name: "编辑",
                api_url: ["/cms/api/def/channelGroup/editChannelGroup"]
              }
            ]
          }
        ]
      },
      {
        id: "0203",
        name: "行业素材管理",
        url: "/content/material",
        parent_id: "02",
        children: [
          {
            id: "020301",
            name: "图片管理",
            url: "/content/material/picture",
            parent_id: "0203",
            permissions: [
              {
                id: "02030101",
                menu_id: "020301",
                name: "查看",
                api_url: ["/cms/api/def/picture/getPictures"]
              },
              {
                id: "02030102",
                menu_id: "020301",
                name: "新增",
                api_url: ["/cms/api/def/picture/addPictures"]
              },
              {
                id: "02030103",
                menu_id: "020301",
                name: "删除",
                api_url: ["/cms/api/def/picture/delPictures"]
              },
              {
                id: "02030104",
                menu_id: "020301",
                name: "编辑",
                api_url: ["/cms/api/def/picture/editPicture"]
              }
            ]
          },
          {
            id: "020302",
            name: "视频管理",
            url: "/content/material/video",
            parent_id: "0203",
            permissions: [
              {
                id: "02030201",
                menu_id: "020302",
                name: "查看",
                api_url: ["/cms/api/def/video/getVideoList", "def/video/getVideoById"]
              },
              {
                id: "02030202",
                menu_id: "020302",
                name: "新增",
                api_url: ["/cms/api/def/video/addVideo"]
              },
              {
                id: "02030203",
                menu_id: "020302",
                name: "删除",
                api_url: ["/cms/api/def/video/delVideo"]
              },
              {
                id: "02030204",
                menu_id: "020302",
                name: "编辑",
                api_url: ["/cms/api/def/video/editVideo"]
              }
            ]
          }
        ]
      },
      {
        id: "0204",
        name: "栏目库管理",
        url: "/content/column_lib",
        parent_id: "02",
        children: [
          {
            id: "020401",
            name: "公共栏目管理",
            url: "/content/column_lib/public_column",
            parent_id: "0204",
            permissions: [
              {
                id: "02040101",
                menu_id: "020401",
                name: "查看",
                api_url: [
                  "/cms/api/def/category/getCategoryTypeList",
                  "/cms/api/def/category/getPictureSpecification",
                  "/cms/api/def/category/getCategoryInfo",
                  "/cms/api/def/category/getPublicCategoryList",
                  "/cms/api/def/category/getCategoryProgram",
                  "/cms/api/def/category/getCategorySeries",
                  "/cms/api/def/category/getCategoryTreeInfo",
                  "/cms/api/def/category/getPublicCategoryTreeList",
                  "/cms/api/def/category/selectPublicCategoryList",
                  "/cms/api/def/category/selectPublicCategoryTreeList",
                  "/cms/api/def/category/getTradeGroupCategoryTreeInfo"
                ]
              },
              {
                id: "02040102",
                menu_id: "020401",
                name: "新增",
                api_url: ["/cms/api/def/category/addCategory"]
              },
              {
                id: "02040103",
                menu_id: "020401",
                name: "删除",
                api_url: ["/cms/api/def/category/delCategory"]
              },
              {
                id: "02040104",
                menu_id: "020401",
                name: "编辑",
                api_url: [
                  "/cms/api/def/category/editCategory",
                  "/cms/api/def/category/bindCategoryProgram",
                  "/cms/api/def/category/bindCategorySeries",
                  "/cms/api/def/category/sendPublicCategoryAudit"
                ]
              }
            ]
          },
          {
            id: "020402",
            name: "公共栏目树管理",
            url: "/content/column_lib/public_tree",
            parent_id: "0204",
            permissions: [
              {
                id: "02040201",
                menu_id: "020402",
                name: "查看",
                api_url: [
                  "/cms/api/def/category/getCategoryTypeList",
                  "/cms/api/def/category/getPictureSpecification",
                  "/cms/api/def/category/getCategoryInfo",
                  "/cms/api/def/category/getPublicCategoryList",
                  "/cms/api/def/category/getCategoryProgram",
                  "/cms/api/def/category/getCategorySeries",
                  "/cms/api/def/category/getCategoryTreeInfo",
                  "/cms/api/def/category/getPublicCategoryTreeList",
                  "/cms/api/def/category/selectPublicCategoryList",
                  "/cms/api/def/category/selectPublicCategoryTreeList",
                  "/cms/api/def/category/getTradeGroupCategoryTreeInfo"
                ]
              },
              {
                id: "02040202",
                menu_id: "020402",
                name: "新增",
                api_url: ["/cms/api/def/category/addPublicCategoryTree"]
              },
              {
                id: "02040203",
                menu_id: "020402",
                name: "删除",
                api_url: ["/cms/api/def/category/deletePublicCategoryTree"]
              },
              {
                id: "02040204",
                menu_id: "020402",
                name: "编辑",
                api_url: [
                  "/cms/api/def/category/editRootCategory",
                  "/cms/api/def/category/editPublicCategoryTree",
                  "/cms/api/def/category/bindPublicCategoryChildNode",
                  "/cms/api/def/category/unbindPublicCategory",
                  "/cms/api/def/category/editPublicCategoryDisplayName",
                  "/cms/api/def/category/moveCategory",
                  "/cms/api/def/category/sendPublicCategoryTreeAudit"
                ]
              }
            ]
          },
          {
            id: "020403",
            name: "行业分组栏目管理",
            url: "/content/column_lib/trade_column",
            parent_id: "0204",
            permissions: [
              {
                id: "02040301",
                menu_id: "020403",
                name: "查看",
                api_url: [
                  "/cms/api/def/category/getCategoryTypeList",
                  "/cms/api/def/category/getPictureSpecification",
                  "/cms/api/def/category/getCategoryInfo",
                  "/cms/api/def/category/getPublicCategoryList",
                  "/cms/api/def/category/getCategoryProgram",
                  "/cms/api/def/category/getCategorySeries",
                  "/cms/api/def/category/getCategoryTreeInfo",
                  "/cms/api/def/category/getPublicCategoryTreeList",
                  "/cms/api/def/category/selectPublicCategoryList",
                  "/cms/api/def/category/selectPublicCategoryTreeList",
                  "/cms/api/def/category/getTradeGroupCategoryTreeInfo"
                ]
              },
              {
                id: "02040302",
                menu_id: "020403",
                name: "新增",
                api_url: ["/cms/api/def/category/addCategory"]
              },
              {
                id: "02040303",
                menu_id: "020403",
                name: "删除",
                api_url: ["/cms/api/def/category/delCategory"]
              },
              {
                id: "02040304",
                menu_id: "020403",
                name: "编辑",
                api_url: [
                  "/cms/api/def/category/editCategory",
                  "/cms/api/def/category/editRootCategory",
                  "/cms/api/def/category/moveCategory",
                  "/cms/api/def/category/bindPublicCategoryTree",
                  "/cms/api/def/category/editTradeGroupRootCategory",
                  "/cms/api/def/category/sendTradeGroupCategoryTreeAudit"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "0205",
        name: "滚动消息管理",
        url: "/content/scroll_message",
        parent_id: "02",
        permissions: [
          {
            id: "020501",
            menu_id: "0205",
            name: "查看",
            api_url: ["/cms/api/def/scrollMessage/getScrollMessageList"]
          },
          {
            id: "020502",
            menu_id: "0205",
            name: "新增",
            api_url: ["/cms/api/def/scrollMessage/addScrollMessage"]
          },
          {
            id: "020503",
            menu_id: "0205",
            name: "删除",
            api_url: ["/cms/api/def/scrollMessage/delScrollMessage"]
          },
          {
            id: "020504",
            menu_id: "0205",
            name: "编辑",
            api_url: [
              "/cms/api/def/scrollMessage/editScrollMessage",
              "/cms/api/def/scrollMessage/setScrollMessageStatus"
            ]
          }
        ]
      },
      {
        id: "0206",
        name: "弹窗消息管理",
        url: "/content/popup_message",
        parent_id: "02",
        permissions: [
          {
            id: "020601",
            menu_id: "0206",
            name: "查看",
            api_url: ["/cms/api/def/popupMessage/getPopupMessageList"]
          },
          {
            id: "020602",
            menu_id: "0206",
            name: "新增",
            api_url: ["/cms/api/def/popupMessage/addPopupMessage"]
          },
          {
            id: "020603",
            menu_id: "0206",
            name: "删除",
            api_url: ["/cms/api/def/popupMessage/delPopupMessage"]
          },
          {
            id: "020604",
            menu_id: "0206",
            name: "编辑",
            api_url: [
              "/cms/api/def/popupMessage/editPopupMessage",
              "/cms/api/def/popupMessage/setPopupMessageStatus"
            ]
          }
        ]
      },
      {
        id: "0207",
        name: "内容分发监控",
        url: "/content/distributed",
        parent_id: "02",
        children: [
          {
            id: "020701",
            name: "下发进程",
            url: "/content/distributed/sent_down",
            parent_id: "0207",
            permissions: [
              {
                id: "02070101",
                menu_id: "020701",
                name: "查看",
                api_url: [
                  "/cms/api/def/taskDistribute/getTaskDistributeTypeList",
                  "/cms/api/def/taskDistribute/getTaskDistributeStatusList",
                  "/cms/api/def/taskDistribute/getTaskDistributeList"
                ]
              }
            ]
          },
          {
            id: "020702",
            name: "下载进程",
            url: "/content/distributed/download",
            parent_id: "0207",
            permissions: [
              {
                id: "02070201",
                menu_id: "020702",
                name: "查看",
                api_url: ["/cms/api/def/??/??"]
              }
            ]
          }
        ]
      },
      {
        id: "0208",
        name: "标签管理",
        url: "/content/material_tags",
        parent_id: "02",
        permissions: [
          {
            id: "020801",
            menu_id: "0208",
            name: "查看",
            api_url: ["/cms/api/def/label/getLabelList", "/cms/api/def/label/getLabelById"]
          },
          {
            id: "020802",
            menu_id: "0208",
            name: "新增",
            api_url: ["/cms/api/def/label/addLabel"]
          },
          {
            id: "020803",
            menu_id: "0208",
            name: "删除",
            api_url: ["/cms/api/def/label/delLabel"]
          },
          {
            id: "020804",
            menu_id: "0208",
            name: "编辑",
            api_url: ["/cms/api/def/label/editLabel"]
          }
        ]
      },
      {
        id: "0209",
        name: "运营推荐管理",
        url: "/content/recommend",
        parent_id: "02",
        permissions: [
          {
            id: "020901",
            menu_id: "0209",
            name: "查看",
            api_url: [
              "/cms/api/def/adSpace/getAdPolicyList",
              "/cms/api/def/adSpace/getAdContentType",
              "/cms/api/def/adSpace/def/adSpace/selectAdTradeGroupList"
            ]
          },
          {
            id: "020902",
            menu_id: "0209",
            name: "新增",
            api_url: ["/cms/api/def/adSpace/addAdPolicy"]
          }
        ]
      },
      {
        id: "0210",
        name: "敏感词管理",
        url: "/content/sensitiveWords",
        parent_id: "02",
        permissions: [
          {
            id: "021001",
            menu_id: "0210",
            name: "查看",
            api_url: ["/cms/api/def/badword/getBadWordList"]
          },
          {
            id: "021002",
            menu_id: "0210",
            name: "新增",
            api_url: ["/cms/api/def/badword/addBadWord"]
          },
          {
            id: "021003",
            menu_id: "0210",
            name: "删除",
            api_url: ["/cms/api/def/badword/delBadWord"]
          }
        ]
      }
    ]
  },
  {
    id: "03",
    name: "审核管理",
    url: "/audit",
    parent_id: "",
    children: [
      {
        id: "0301",
        name: "影片审核",
        url: "/audit/film",
        parent_id: "03",
        children: [
          {
            id: "030101",
            name: "待审核",
            url: "/audit/film/wait",
            parent_id: "0301",
            permissions: [
              {
                id: "03010101",
                menu_id: "030101",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03010104",
                menu_id: "030101",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030102",
            name: "审核通过",
            url: "/audit/film/passed",
            parent_id: "0301",
            permissions: [
              {
                id: "03010201",
                menu_id: "030102",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030103",
            name: "审核不通过",
            url: "/audit/film/not_passed",
            parent_id: "0301",
            permissions: [
              {
                id: "03010301",
                menu_id: "030103",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0302",
        name: "剧集审核",
        url: "/audit/episode",
        parent_id: "03",
        children: [
          {
            id: "030201",
            name: "待审核",
            url: "/audit/episode/wait",
            parent_id: "0302",
            permissions: [
              {
                id: "03020101",
                menu_id: "030201",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03020104",
                menu_id: "030201",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030202",
            name: "审核通过",
            url: "/audit/episode/passed",
            parent_id: "0302",
            permissions: [
              {
                id: "03020201",
                menu_id: "030202",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030203",
            name: "审核不通过",
            url: "/audit/episode/not_passed",
            parent_id: "0302",
            permissions: [
              {
                id: "03020301",
                menu_id: "030203",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0303",
        name: "子集审核",
        url: "/audit/sub_series",
        parent_id: "03",
        children: [
          {
            id: "030301",
            name: "待审核",
            url: "/audit/subset/wait",
            parent_id: "0303",
            permissions: [
              {
                id: "03030101",
                menu_id: "030301",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03030104",
                menu_id: "030301",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030302",
            name: "审核通过",
            url: "/audit/subset/passed",
            parent_id: "0303",
            permissions: [
              {
                id: "03030201",
                menu_id: "030302",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030303",
            name: "审核不通过",
            url: "/audit/subset/not_passed",
            parent_id: "0303",
            permissions: [
              {
                id: "03030301",
                menu_id: "030303",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0304",
        name: "图片审核",
        url: "/audit/picture",
        parent_id: "03",
        children: [
          {
            id: "030401",
            name: "待审核",
            url: "/audit/picture/wait",
            parent_id: "0304",
            permissions: [
              {
                id: "03040101",
                menu_id: "030401",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03040104",
                menu_id: "030401",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030402",
            name: "审核通过",
            url: "/audit/picture/passed",
            parent_id: "0304",
            permissions: [
              {
                id: "03040201",
                menu_id: "030402",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030403",
            name: "审核不通过",
            url: "/audit/picture/not_passed",
            parent_id: "0304",
            permissions: [
              {
                id: "03040301",
                menu_id: "030403",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0305",
        name: "视频审核",
        url: "/audit/video",
        parent_id: "03",
        children: [
          {
            id: "030501",
            name: "待审核",
            url: "/audit/video/wait",
            parent_id: "0305",
            permissions: [
              {
                id: "03050101",
                menu_id: "030501",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03050104",
                menu_id: "030501",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030502",
            name: "审核通过",
            url: "/audit/video/passed",
            parent_id: "0305",
            permissions: [
              {
                id: "03050201",
                menu_id: "030502",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030503",
            name: "审核不通过",
            url: "/audit/video/not_passed",
            parent_id: "0305",
            permissions: [
              {
                id: "03050301",
                menu_id: "030503",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0306",
        name: "栏目审核",
        url: "/audit/column",
        parent_id: "03",
        children: [
          {
            id: "030601",
            name: "待审核",
            url: "/audit/column/wait",
            parent_id: "0306",
            permissions: [
              {
                id: "03060101",
                menu_id: "030601",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03060104",
                menu_id: "030601",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030602",
            name: "审核通过",
            url: "/audit/column/passed",
            parent_id: "0306",
            permissions: [
              {
                id: "03060201",
                menu_id: "030602",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030603",
            name: "审核不通过",
            url: "/audit/column/not_passed",
            parent_id: "0306",
            permissions: [
              {
                id: "03060301",
                menu_id: "030603",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0307",
        name: "EPG审核",
        url: "/audit/epg",
        parent_id: "03",
        children: [
          {
            id: "030701",
            name: "待审核",
            url: "/audit/epg/wait",
            parent_id: "0307",
            permissions: [
              {
                id: "03070101",
                menu_id: "030701",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03070104",
                menu_id: "030701",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030702",
            name: "审核通过",
            url: "/audit/epg/passed",
            parent_id: "0307",
            permissions: [
              {
                id: "03070201",
                menu_id: "030702",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030703",
            name: "审核不通过",
            url: "/audit/epg/not_passed",
            parent_id: "0307",
            permissions: [
              {
                id: "03070301",
                menu_id: "030703",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0308",
        name: "滚动消息审核",
        url: "/audit/scroll_message",
        parent_id: "03",
        children: [
          {
            id: "030801",
            name: "待审核",
            url: "/audit/scroll_message/wait",
            parent_id: "0308",
            permissions: [
              {
                id: "03080101",
                menu_id: "030801",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03080104",
                menu_id: "030801",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030802",
            name: "审核通过",
            url: "/audit/scroll_message/passed",
            parent_id: "0308",
            permissions: [
              {
                id: "03080201",
                menu_id: "030802",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030803",
            name: "审核不通过",
            url: "/audit/scroll_message/not_passed",
            parent_id: "0308",
            permissions: [
              {
                id: "03080301",
                menu_id: "030803",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0309",
        name: "弹窗消息审核",
        url: "/audit/popup_message",
        parent_id: "03",
        children: [
          {
            id: "030901",
            name: "待审核",
            url: "/audit/popup_message/wait",
            parent_id: "0309",
            permissions: [
              {
                id: "03090101",
                menu_id: "030901",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03090104",
                menu_id: "030901",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "030902",
            name: "审核通过",
            url: "/audit/popup_message/passed",
            parent_id: "0309",
            permissions: [
              {
                id: "03090201",
                menu_id: "030902",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "030903",
            name: "审核不通过",
            url: "/audit/popup_message/not_passed",
            parent_id: "0309",
            permissions: [
              {
                id: "03090301",
                menu_id: "030903",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0310",
        name: "频道审核",
        url: "/audit/channel",
        parent_id: "03",
        children: [
          {
            id: "031001",
            name: "待审核",
            url: "/audit/channel/wait",
            parent_id: "0310",
            permissions: [
              {
                id: "03100101",
                menu_id: "031001",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03100104",
                menu_id: "031001",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "031002",
            name: "审核通过",
            url: "/audit/channel/passed",
            parent_id: "0310",
            permissions: [
              {
                id: "03100201",
                menu_id: "031002",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "031003",
            name: "审核不通过",
            url: "/audit/channel/not_passed",
            parent_id: "0310",
            permissions: [
              {
                id: "03100301",
                menu_id: "031003",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0311",
        name: "频道分组审核",
        url: "/audit/channel_group",
        parent_id: "03",
        children: [
          {
            id: "031101",
            name: "待审核",
            url: "/audit/channel_group/wait",
            parent_id: "0311",
            permissions: [
              {
                id: "03110101",
                menu_id: "031101",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03110104",
                menu_id: "031101",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "031102",
            name: "审核通过",
            url: "/audit/channel_group/passed",
            parent_id: "0311",
            permissions: [
              {
                id: "03110201",
                menu_id: "031102",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "031103",
            name: "审核不通过",
            url: "/audit/channel_group/not_passed",
            parent_id: "0311",
            permissions: [
              {
                id: "03110301",
                menu_id: "031103",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0312",
        name: "公共栏目树审核",
        url: "/audit/column_pub_tree",
        parent_id: "03",
        children: [
          {
            id: "031201",
            name: "待审核",
            url: "/audit/column_pub_tree/wait",
            parent_id: "0312",
            permissions: [
              {
                id: "03120101",
                menu_id: "031201",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03120104",
                menu_id: "031201",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "031202",
            name: "审核通过",
            url: "/audit/column_pub_tree/passed",
            parent_id: "0312",
            permissions: [
              {
                id: "03120201",
                menu_id: "031202",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "031203",
            name: "审核不通过",
            url: "/audit/column_pub_tree/not_passed",
            parent_id: "0312",
            permissions: [
              {
                id: "03120301",
                menu_id: "031203",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0313",
        name: "行业分组栏目树审核",
        url: "/audit/industry_grouping_tree",
        parent_id: "03",
        children: [
          {
            id: "031301",
            name: "待审核",
            url: "/audit/industry_grouping_tree/wait",
            parent_id: "0313",
            permissions: [
              {
                id: "03130101",
                menu_id: "031301",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03130104",
                menu_id: "031301",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "031302",
            name: "审核通过",
            url: "/audit/industry_grouping_tree/passed",
            parent_id: "0313",
            permissions: [
              {
                id: "03130201",
                menu_id: "031302",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "031303",
            name: "审核不通过",
            url: "/audit/industry_grouping_tree/not_passed",
            parent_id: "0313",
            permissions: [
              {
                id: "03130301",
                menu_id: "031303",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      },
      {
        id: "0314",
        name: "推荐管理审核",
        url: "/audit/recommend",
        parent_id: "03",
        children: [
          {
            id: "031401",
            name: "待审核",
            url: "/audit/recommend/wait",
            parent_id: "0314",
            permissions: [
              {
                id: "03140101",
                menu_id: "031401",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              },
              {
                id: "03140104",
                menu_id: "031401",
                name: "编辑",
                api_url: ["/cms/api/audit/audit/setAuditStatus"]
              }
            ]
          },
          {
            id: "031402",
            name: "审核通过",
            url: "/audit/recommend/passed",
            parent_id: "0314",
            permissions: [
              {
                id: "03140201",
                menu_id: "031402",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          },
          {
            id: "031403",
            name: "审核不通过",
            url: "/audit/recommend/not_passed",
            parent_id: "0314",
            permissions: [
              {
                id: "03140301",
                menu_id: "031403",
                name: "查看",
                api_url: ["/cms/api/audit/audit/getAuditList"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "04",
    name: "升级管理",
    url: "/upgrade",
    parent_id: "",
    children: [
      {
        id: "0401",
        name: "版本管理",
        url: "/upgrade/version",
        parent_id: "04",
        permissions: [
          {
            id: "040101",
            menu_id: "0401",
            name: "查看",
            api_url: ["/cms/api/def/epg/getEpgTemplateList", "/cms/api/def/epg/getEpgPackage"]
          },
          {
            id: "040102",
            menu_id: "0401",
            name: "新增",
            api_url: ["/cms/api/def/epg/addEpgTemplate", "/cms/api/def/epg/addEpgPackage"]
          },
          {
            id: "040104",
            menu_id: "0401",
            name: "编辑",
            api_url: ["/cms/api/def/epg/editEpgTemplate", "/cms/api/def/epg/editEpgPackage"]
          }
        ]
      },
      {
        id: "0402",
        name: "升级策略管理",
        url: "/upgrade/strategy",
        parent_id: "04",
        permissions: [
          {
            id: "040201",
            menu_id: "0402",
            name: "查看",
            api_url: [
              "/cms/api/def/epgPolicy/getEpgPolicyList",
              "/cms/api/def/epgPolicy/getEpgPolicyInstallation"
            ]
          },
          {
            id: "040202",
            menu_id: "0402",
            name: "新增",
            api_url: ["/cms/api/def/epgPolicy/addEpgPolicy"]
          },
          {
            id: "040204",
            menu_id: "0402",
            name: "编辑",
            api_url: ["/cms/api/def/epgPolicy/editEpgPolicy"]
          }
        ]
      }
    ]
  }
];
export default majorMenu;
