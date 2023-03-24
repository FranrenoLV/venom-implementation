export class MessageModel {
  id: string;
  body: string;
  type: string;
  t: number;
  notifyName: string;
  from: string;
  to: string;
  author: string;
  self: string;
  ack: number;
  isNewMsg: boolean;
  star: boolean;
  kicNotified: boolean;
  recvFresh: boolean;
  isFromTemplate: boolean;
  pollInvalidated: boolean;
  isSentCagPollCreation: boolean;
  latestEditMsgKey: any;
  latestEditSenderTimestampMs: any;
  broadcast: boolean;
  mentionedJidList: any[];
  groupMentions: any[];
  isVcardOverMmsDocument: boolean;
  isForwarded: boolean;
  hasReaction: boolean;
  ephemeralStartTimestamp: number;
  productHeaderImageRejected: boolean;
  lastPlaybackProgress: number;
  isDynamicReplyButtonsMsg: boolean;
  isMdHistoryMsg: boolean;
  stickerSentTs: number;
  isAvatar: boolean;
  requiresDirectConnection: boolean;
  chatId: string;
  fromMe: boolean;
  sender: Sender;
  timestamp: number;
  content: string;
  isGroupMsg: boolean;
  isMedia: boolean;
  isNotification: boolean;
  isPSA: boolean;
  chat: Chat;
  isOnline: any;
  lastSeen: number;
  mediaData: MediaData;
  linkPreview: boolean;
  text: string;
  initialPageSize: number;

  constructor(
    _id: string,
    _body: string,
    _type: string,
    _t: number,
    _notifyName: string,
    _from: string,
    _to: string,
    _author: string,
    _self: string,
    _ack: number,
    _isNewMsg: boolean,
    _star: boolean,
    _kicNotified: boolean,
    _recvFresh: boolean,
    _isFromTemplate: boolean,
    _pollInvalidated: boolean,
    _isSentCagPollCreation: boolean,
    _latestEditMsgKey: any,
    _latestEditSenderTimestampMs: any,
    _broadcast: boolean,
    _mentionedJidList: any[],
    _groupMentions: any[],
    _isVcardOverMmsDocument: boolean,
    _isForwarded: boolean,
    _hasReaction: boolean,
    _ephemeralStartTimestamp: number,
    _productHeaderImageRejected: boolean,
    _lastPlaybackProgress: number,
    _isDynamicReplyButtonsMsg: boolean,
    _isMdHistoryMsg: boolean,
    _stickerSentTs: number,
    _isAvatar: boolean,
    _requiresDirectConnection: boolean,
    _chatId: string,
    _fromMe: boolean,
    _sender: Sender,
    _timestamp: number,
    _content: string,
    _isGroupMsg: boolean,
    _isMedia: boolean,
    _isNotification: boolean,
    _isPSA: boolean,
    _chat: Chat,
    _isOnline: any,
    _lastSeen: number,
    _mediaData: MediaData,
    _linkPreview: boolean,
    _text: string,
    _initialPageSize: number
  ) {
    this.id = _id;
    this.body = _body;
    this.type = _type;
    this.t = _t;
    this.notifyName = _notifyName;
    this.from = _from;
    this.to = _to;
    this.author = _author;
    this.self = _self;
    this.ack = _ack;
    this.isNewMsg = _isNewMsg;
    this.star = _star;
    this.kicNotified = _kicNotified;
    this.recvFresh = _recvFresh;
    this.isFromTemplate = _isFromTemplate;
    this.pollInvalidated = _pollInvalidated;
    this.isSentCagPollCreation = _isSentCagPollCreation;
    this.latestEditMsgKey = _latestEditMsgKey;
    this.latestEditSenderTimestampMs = _latestEditSenderTimestampMs;
    this.broadcast = _broadcast;
    this.mentionedJidList = _mentionedJidList;
    this.groupMentions = _groupMentions;
    this.isVcardOverMmsDocument = _isVcardOverMmsDocument;
    this.isForwarded = _isForwarded;
    this.hasReaction = _hasReaction;
    this.ephemeralStartTimestamp = _ephemeralStartTimestamp;
    this.productHeaderImageRejected = _productHeaderImageRejected;
    this.lastPlaybackProgress = _lastPlaybackProgress;
    this.isDynamicReplyButtonsMsg = _isDynamicReplyButtonsMsg;
    this.isMdHistoryMsg = _isMdHistoryMsg;
    this.stickerSentTs = _stickerSentTs;
    this.isAvatar = _isAvatar;
    this.requiresDirectConnection = _requiresDirectConnection;
    this.chatId = _chatId;
    this.fromMe = _fromMe;
    this.sender = _sender;
    this.timestamp = _timestamp;
    this.content = _content;
    this.isGroupMsg = _isGroupMsg;
    this.isMedia = _isMedia;
    this.isNotification = _isNotification;
    this.isPSA = _isPSA;
    this.chat = _chat;
    this.isOnline = _isOnline;
    this.lastSeen = _lastSeen;
    this.mediaData = _mediaData;
    this.linkPreview = _linkPreview;
    this.text = _text;
    this.initialPageSize = _initialPageSize;
  }

  public static fromJson(json: Record<string, any>) {
    return new MessageModel(
      json["id"],
      json["body"],
      json["type"],
      json["t"],
      json["notifyName"],
      json["from"],
      json["to"],
      json["author"],
      json["self"],
      json["ack"],
      json["isNewMsg"],
      json["star"],
      json["kicNotified"],
      json["recvFresh"],
      json["isFromTemplate"],
      json["pollInvalidated"],
      json["isSentCagPollCreation"],
      json["latestEditMsgKey"],
      json["latestEditSenderTimestampMs"],
      json["broadcast"],
      json["mentionedJidList"],
      json["groupMentions"],
      json["isVcardOverMmsDocument"],
      json["isForwarded"],
      json["hasReaction"],
      json["ephemeralStartTimestamp"],
      json["productHeaderImageRejected"],
      json["lastPlaybackProgress"],
      json["isDynamicReplyButtonsMsg"],
      json["isMdHistoryMsg"],
      json["stickerSentTs"],
      json["isAvatar"],
      json["requiresDirectConnection"],
      json["chatId"],
      json["fromMe"],
      json["sender"],
      json["timestamp"],
      json["content"],
      json["isGroupMsg"],
      json["isMedia"],
      json["isNotification"],
      json["isPSA"],
      json["chat"],
      json["isOnline"],
      json["lastSeen"],
      json["mediaData"],
      json["linkPreview"],
      json["text"],
      json["initialPageSize"]
    );
  }

  public toJson(): Record<string, any> {
    return {
      id: this.id,
      body: this.body,
      type: this.type,
      t: this.t,
      notifyName: this.notifyName,
      from: this.from,
      to: this.to,
      author: this.author,
      self: this.self,
      ack: this.ack,
      isNewMsg: this.isNewMsg,
      star: this.star,
      kicNotified: this.kicNotified,
      recvFresh: this.recvFresh,
      isFromTemplate: this.isFromTemplate,
      pollInvalidated: this.pollInvalidated,
      isSentCagPollCreation: this.isSentCagPollCreation,
      latestEditMsgKey: this.latestEditMsgKey,
      latestEditSenderTimestampMs: this.latestEditSenderTimestampMs,
      broadcast: this.broadcast,
      mentionedJidList: this.mentionedJidList,
      groupMentions: this.groupMentions,
      isVcardOverMmsDocument: this.isVcardOverMmsDocument,
      isForwarded: this.isForwarded,
      hasReaction: this.hasReaction,
      ephemeralStartTimestamp: this.ephemeralStartTimestamp,
      productHeaderImageRejected: this.productHeaderImageRejected,
      lastPlaybackProgress: this.lastPlaybackProgress,
      isDynamicReplyButtonsMsg: this.isDynamicReplyButtonsMsg,
      isMdHistoryMsg: this.isMdHistoryMsg,
      stickerSentTs: this.stickerSentTs,
      isAvatar: this.isAvatar,
      requiresDirectConnection: this.requiresDirectConnection,
      chatId: this.chatId,
      fromMe: this.fromMe,
      sender: this.sender,
      timestamp: this.timestamp,
      content: this.content,
      isGroupMsg: this.isGroupMsg,
      isMedia: this.isMedia,
      isNotification: this.isNotification,
      isPSA: this.isPSA,
      chat: this.chat,
      isOnline: this.isOnline,
      lastSeen: this.lastSeen,
      mediaData: this.mediaData,
      linkPreview: this.linkPreview,
      text: this.text,
      initialPageSize: this.initialPageSize,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toJson());
  }
}

export interface Sender {
  id: string;
  name: string;
  shortName: string;
  pushname: string;
  type: string;
  isBusiness: boolean;
  isEnterprise: boolean;
  isSmb: boolean;
  isContactSyncCompleted: number;
  formattedName: string;
  displayName: string;
  formattedShortName: string;
  formattedShortNameWithNonBreakingSpaces: string;
  isMe: boolean;
  mentionName: string;
  notifyName: string;
  isMyContact: boolean;
  isPSA: boolean;
  isUser: boolean;
  isWAContact: boolean;
  profilePicThumbObj: ProfilePicThumbObj;
  msgs: any;
}

export interface ProfilePicThumbObj {
  eurl: string;
  id: string;
  img: string;
  imgFull: string;
  tag: string;
}

export interface Chat {
  id: string;
  lastReceivedKey: LastReceivedKey;
  t: number;
  unreadCount: number;
  archive: boolean;
  isReadOnly: boolean;
  muteExpiration: number;
  isAutoMuted: boolean;
  notSpam: boolean;
  pin: number;
  ephemeralDuration: number;
  ephemeralSettingTimestamp: number;
  disappearingModeInitiator: string;
  unreadMentionCount: number;
  hasUnreadMention: boolean;
  archiveAtMentionViewedInDrawer: boolean;
  hasChatBeenOpened: boolean;
  tcToken: TcToken;
  tcTokenTimestamp: number;
  tcTokenSenderTimestamp: number;
  endOfHistoryTransferType: number;
  pendingInitialLoading: boolean;
  chatlistPreview: ChatlistPreview;
  msgs: any;
  kind: string;
  isGroup: boolean;
  contact: Contact;
  groupMetadata: any;
  isOnline: any;
  lastSeen: number;
}

export interface LastReceivedKey {
  fromMe: boolean;
  remote: string;
  id: string;
  _serialized: string;
}

export interface TcToken {}

export interface ChatlistPreview {
  type: string;
  msgKey: string;
  parentMsgKey: string;
  reactionText: string;
  sender: string;
  timestamp: number;
}

export interface Contact {
  id: string;
  name: string;
  shortName: string;
  pushname: string;
  type: string;
  isBusiness: boolean;
  isEnterprise: boolean;
  isSmb: boolean;
  isContactSyncCompleted: number;
  formattedName: string;
  displayName: string;
  formattedShortName: string;
  formattedShortNameWithNonBreakingSpaces: string;
  isMe: boolean;
  mentionName: string;
  notifyName: string;
  isMyContact: boolean;
  isPSA: boolean;
  isUser: boolean;
  isWAContact: boolean;
  profilePicThumbObj: string[];
  msgs: any;
}

export interface MediaData {
  type: string;
  mediaStage: string;
  size: number;
  loadedSize: number;
  filehash: string;
  mimetype: string;
  mediaBlob: any;
  fullHeight: number;
  fullWidth: number;
  aspectRatio: number;
  animationDuration: number;
  animatedAsNewMsg: boolean;
  isViewOnce: boolean;
  staticUrl: string;
  preview: Preview;
  _swStreamingSupported: boolean;
  _listeningToSwSupport: boolean;
  isVcardOverMmsDocument: boolean;
}

export interface Preview {
  _retainCount: number;
  _inAutoreleasePool: boolean;
  released: boolean;
  _b64: string;
  _mimetype: string;
}
