"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
class MessageModel {
    constructor(_id, _body, _type, _t, _notifyName, _from, _to, _author, _self, _ack, _isNewMsg, _star, _kicNotified, _recvFresh, _isFromTemplate, _pollInvalidated, _isSentCagPollCreation, _latestEditMsgKey, _latestEditSenderTimestampMs, _broadcast, _mentionedJidList, _groupMentions, _isVcardOverMmsDocument, _isForwarded, _hasReaction, _ephemeralStartTimestamp, _productHeaderImageRejected, _lastPlaybackProgress, _isDynamicReplyButtonsMsg, _isMdHistoryMsg, _stickerSentTs, _isAvatar, _requiresDirectConnection, _chatId, _fromMe, _sender, _timestamp, _content, _isGroupMsg, _isMedia, _isNotification, _isPSA, _chat, _isOnline, _lastSeen, _mediaData, _linkPreview, _text, _initialPageSize) {
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
    static fromJson(json) {
        return new MessageModel(json["id"], json["body"], json["type"], json["t"], json["notifyName"], json["from"], json["to"], json["author"], json["self"], json["ack"], json["isNewMsg"], json["star"], json["kicNotified"], json["recvFresh"], json["isFromTemplate"], json["pollInvalidated"], json["isSentCagPollCreation"], json["latestEditMsgKey"], json["latestEditSenderTimestampMs"], json["broadcast"], json["mentionedJidList"], json["groupMentions"], json["isVcardOverMmsDocument"], json["isForwarded"], json["hasReaction"], json["ephemeralStartTimestamp"], json["productHeaderImageRejected"], json["lastPlaybackProgress"], json["isDynamicReplyButtonsMsg"], json["isMdHistoryMsg"], json["stickerSentTs"], json["isAvatar"], json["requiresDirectConnection"], json["chatId"], json["fromMe"], json["sender"], json["timestamp"], json["content"], json["isGroupMsg"], json["isMedia"], json["isNotification"], json["isPSA"], json["chat"], json["isOnline"], json["lastSeen"], json["mediaData"], json["linkPreview"], json["text"], json["initialPageSize"]);
    }
}
exports.MessageModel = MessageModel;
