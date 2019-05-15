declare namespace JWF{

interface FunctionData {
    name: string;
    params: any[];
}
interface FunctionSet {
    functions: FunctionData[];
    promise: {
        [key: string]: Function;
    };
    array: boolean;
}
export class Adapter {
    handle: number | null;
    scriptUrl: string;
    globalHash: string | null;
    keyName: string;
    functionSet: FunctionSet[];
    constructor(scriptUrl?: string, keyName?: string);
    exec(functions: FunctionData[][]): Promise<any>;
    exec(funcName: string, ...params: any[]): Promise<any>;
    callSend(): void;
    send(): void;
    static sendJsonAsync(url: string, data?: any, headers?: {
        [key: string]: string;
    }): Promise<{}>;
    static sendJson(url: string, data: any, proc: Function, headers?: {
        [key: string]: string;
    }): any;
}
export {};

export interface BUTTON_EVENT_ITEM_CLICK {
        event: Event;
}
export interface ButtonEventMap extends WINDOW_EVENT_MAP {
        "buttonClick": BUTTON_EVENT_ITEM_CLICK;
        "buttonDblClick": BUTTON_EVENT_ITEM_CLICK;
}
/**
    *ボタン用クラス
         *
         * @export
         * @class Button
         * @extends {Window}
         */
export class Button extends Window {
        nodeText: HTMLElement;
        nodeValue: any;
        /**
            *Creates an instance of Button.
                 * @param {string} [text] ボタンに設定するテキスト
                 * @memberof Button
                 */
        constructor(text?: string, value?: any);
        /**
            *ボタンに対してテキストを設定する
                 *
                 * @param {string} text
                 * @memberof Button
                 */
        setText(text: string): void;
        /**
            *ボタンに設定したテキストを取得する
                 *
                 * @returns {string}
                 * @memberof Button
                 */
        getText(): string | null;
        setAlign(style: string): void;
        getValue(): any;
        /**
            *イベントの設定
                 * 'buttonClick','buttonDblClick'
                 *
                 * @template K
                 * @param {K} type
                 * @param {(ev: ButtonEventMap[K]) => any} listener
                 * @memberof Button
                 */
        addEventListener<K extends keyof ButtonEventMap>(type: K, listener: (ev: ButtonEventMap[K]) => any): void;
}
export class ImageButton extends Window {
        nodeImg: HTMLImageElement;
        /**
            *Creates an instance of Button.
                 * @param {string} [text] ボタンに設定するテキスト
                 * @memberof Button
                 */
        constructor(image: string, alt?: string);
        /**
            *ボタンに対してテキストを設定する
                 *
                 * @param {string} text
                 * @memberof Button
                 */
        setText(text: string): void;
        /**
            *ボタンに設定したテキストを取得する
                 *
                 * @returns {string}
                 * @memberof Button
                 */
        getText(): string;
        setAlign(style: string): void;
        /**
            *イベントの設定
                 * 'buttonClick','buttonDblClick'
                 *
                 * @template K
                 * @param {K} type
                 * @param {(ev: ButtonEventMap[K]) => any} listener
                 * @memberof Button
                 */
        addEventListener<K extends keyof ButtonEventMap>(type: K, listener: (ev: ButtonEventMap[K]) => any): void;
}

export interface CALENDARVIEW_EVENT_DATE_CLICK {
    date: Date;
}
export interface CalendarViewEventMap extends WINDOW_EVENT_MAP {
    "date": CALENDARVIEW_EVENT_DATE_CLICK;
}
export class CalendarView extends Window {
    titleCell: HTMLTableDataCellElement;
    dateCells: HTMLTableDataCellElement[];
    calendarDate: Date;
    startDate: Date | null;
    endDate: Date | null;
    holidays: {
        [keys: string]: string;
    };
    selects: {
        [keys: string]: boolean;
    };
    constructor(p?: WINDOW_PARAMS);
    moveMonth(month: number): void;
    redraw(): void;
    setHoliday(date: Date, text: string): void;
    setSelect(date: Date, value?: boolean): void;
    addEventListener<K extends keyof CalendarViewEventMap>(type: K, listener: (ev: CalendarViewEventMap[K]) => any): void;
    callEvent<K extends keyof CalendarViewEventMap>(type: K, param: CalendarViewEventMap[K]): void;
}

export class CheckBox extends Window {
    nodeText: HTMLSpanElement;
    nodeCheck: HTMLInputElement;
    constructor(params?: {
        text?: string;
        checked?: boolean;
    });
    isCheck(): boolean;
    setCheck(check: boolean): void;
    setText(text: string): void;
    getText(): string | null;
    getTextNode(): HTMLSpanElement;
}

export class Label extends Window {
    nodeText: HTMLSpanElement;
    constructor(text?: string);
    setFontSize(size: number): void;
    setText(text: string): void;
    getText(): string | null;
    getTextNode(): HTMLSpanElement;
    setAlign(style: string): void;
}

export function Sleep(timeout: number): Promise<void>;
export function sprintf(format: string, ...args: any[]): string;

export interface LISTVIEW_EVENT_ITEM_CLICK {
        itemIndex: number;
        subItemIndex: number;
        event: MouseEvent;
}
export interface LISTVIEW_EVENT_DRAG_START {
        itemIndex: number;
        subItemIndex: number;
        event: DragEvent;
}
export interface ListViewEventMap extends WINDOW_EVENT_MAP {
        "itemClick": LISTVIEW_EVENT_ITEM_CLICK;
        "itemDblClick": LISTVIEW_EVENT_ITEM_CLICK;
        "itemDragStart": LISTVIEW_EVENT_DRAG_START;
}
/**
    *ListView用クラス
 *
 * @export
 * @class ListView
 * @extends {Window}
 */
export class ListView extends Window {
        headerArea: HTMLElement;
        headerBack: HTMLElement;
        headers: HTMLElement;
        resizers: HTMLElement;
        itemArea: HTMLElement;
        overIndex: number;
        lastIndex: number;
        selectIndexes: number[];
        sortIndex: number;
        sortVector: boolean;
        columnWidth: number[];
        columnAutoIndex: number;
        areaWidth: number;
        /**
            *Creates an instance of ListView.
            * @param {*} [params] ウインドウ作成パラメータ
            * @memberof ListView
            */
        constructor(params?: WINDOW_PARAMS);
        /**
            *カラムのサイズを設定
            *
            * @param {number} index
            * @param {number} size
            * @memberof ListView
            */
        setColumnWidth(index: number, size: number): void;
        /**
            *カラムのスタイルを設定
            *
            * @param {number} col カラム番号
            * @param {('left'|'right'|'center')} style スタイル
            * @memberof ListView
            */
        setColumnStyle(col: number, style: 'left' | 'right' | 'center'): void;
        /**
            *カラムのスタイルを複数設定
            *
            * @param {(('left' | 'right' | 'center')[])} styles スタイル
            * @memberof ListView
            */
        setColumnStyles(styles: ('left' | 'right' | 'center')[]): void;
        /**
            *ヘッダを追加
            *配列にすると複数追加でき、さらに配列を含めるとサイズが指定できる
            * @param {(string|(string|[string,number])[])} labels ラベル | [ラベル,ラベル,・・・] | [[ラベル,幅],[ラベル,幅],・・・]
            * @param {number} [size] 幅
            * @memberof ListView
            */
        addHeader(label: string | (string | [string, number])[], size?: number): void;
        /**
            *アイテムのソートを行う
            *
            * @param {number} [index] カラム番号
            * @param {boolean} [order] 方向 true:昇順 false:降順
            * @memberof ListView
            */
        sortItem(index?: number, order?: boolean): void;
        /**
            *アイテムを選択する
            *すでにある選択は解除される
            * @param {(number | number[])} index レコード番号
            * @memberof ListView
            */
        selectItem(index: number | number[]): void;
        /**
            *アイテムの選択を全て解除する
            *
            * @memberof ListView
            */
        clearSelectItem(): void;
        /**
            *アイテムの選択を追加する
            *
            * @param {(number | number[])} index レコード番号
            * @memberof ListView
            */
        addSelectItem(index: number | number[]): void;
        /**
            *アイテムの選択を解除する
            *
            * @param {(number | number[])} index レコード番号
            * @memberof ListView
            */
        delSelectItem(index: number | number[]): void;
        /**
            *アイテムの数を返す
            *
            * @returns {number} アイテム数
            * @memberof ListView
            */
        getItemCount(): number;
        /**
            *アイテムが選択されているか返す
            *
            * @param {number} index レコード番号
            * @returns {boolean}
            * @memberof ListView
            */
        isSelectItem(index: number): boolean;
        /**
            *アイテムを全て削除する
            *
            * @memberof ListView
            */
        clearItem(): void;
        /**
            *対象セルのノードを取得
            *
            * @param {number} row
            * @param {number} col
            * @returns
            * @memberof ListView
            */
        getCell(row: number, col: number): any;
        /**
            *アイテムに値を設定する
            *
            * @param {number} index レコード番号
            * @param {*} value 値
            * @memberof ListView
            */
        setItemValue(index: number, value: any): void;
        /**
            *アイテムの値を取得する
            *
            * @param {number} index レコード番号
            * @returns 値
            * @memberof ListView
            * @returns {string} アイテムに設定されている値
            */
        getItemValue(index: number): any;
        /**
            *アイテムのテキスト内容を取得
            *
            * @param {number} row 行
            * @param {number} col 列
            * @returns {string} アイテムに設定されているテキスト
            * @memberof ListView
            */
        getItemText(row: number, col: number): string;
        /**
            *最初に選択されているアイテムを返す
            *
            * @returns {number} 選択されているアイテム番号(見つからなかったら-1)
            * @memberof ListView
            */
        getSelectItem(): number;
        /**
            *選択されている値を全て取得する
            *
            * @returns {any[]} 選択されているアイテムの値
            * @memberof ListView
            */
        getSelectValues(): any[];
        /**
            *指定行のセルノードを返す
            *
            * @param {number} row
            * @returns
            * @memberof ListView
            */
        getLineCells(row: number): any[];
        /**
            *アイテムを追加する
            *アイテムはテキストかノードが指定できる
            *配列を渡した場合は、複数追加となる
            * @param {(string|(string|HTMLElement)[])} value テキストもしくはノード
            * @returns
            * @memberof ListView
            */
        addItem(value: string | number | HTMLElement | ((string | number | HTMLElement)[]), itemValue?: any): number;
        /**
            *ソート用のキーを設定する
            *
            * @param {number} row レコード番号
            * @param {number} column カラム番号
            * @param {*} value キー
            * @returns
            * @memberof ListView
            */
        setSortKey(row: number, column: number, value: any): boolean;
        /**
            *ソート用のキーをまとめて設定する
            *
            * @param {number} row レコード番号
            * @param {any[]} values キー配列
            * @memberof ListView
            */
        setSortKeys(row: number, values: any[]): void;
        /**
            *アイテムを書き換える
            *
            * @param {number} row レコード番号
            * @param {number} column カラム番号
            * @param {(string|HTMLElement)} value テキストもしくはノード
            * @returns
            * @memberof ListView
            */
        setItem(row: number, column: number, value: string | number | HTMLElement): false | undefined;
        /**
            *ヘッダに合わせてカラムサイズを調整する
            *基本的には直接呼び出さない
            * @memberof ListView
            */
        resize(): void;
        onLayout(flag: boolean): void;
        addEventListener<K extends keyof ListViewEventMap>(type: K, listener: (ev: ListViewEventMap[K]) => any): void;
}

export interface MESSAGEBOX_EVENT_ITEM_CLICK {
    value: any;
}
export interface MessageBoxEventMap extends WINDOW_EVENT_MAP {
    "buttonClick": MESSAGEBOX_EVENT_ITEM_CLICK;
}
export class MessageBox extends FrameWindow {
    label: Label;
    constructor(title: string, msg: string, buttons?: {
        [key: string]: any;
    });
    addEventListener<K extends keyof MessageBoxEventMap>(type: K, listener: (ev: MessageBoxEventMap[K]) => any): void;
    setText(text: string): void;
}

/**
  *パネル用クラス
     *
     * @export
     * @class Panel
     * @extends {Window}
     */
export class Panel extends Window {
    constructor();
}

export class SelectBox extends Window {
    select: HTMLSelectElement;
    constructor(option: {
        label?: string;
        options: {
            name: string;
            value: string | number;
        }[];
    });
}

/**
    *分割ウインドウ用クラス
    *
    * @export
    * @class Splitter
    * @extends {Window}
    */
export var SPLIT_TYPE: 'ns' | 'sn' | 'ew' | 'we';
export class Splitter extends Window {
        drawerMode: boolean;
        drawerModeNow: boolean;
        splitterMoving: boolean;
        splitterThick: number;
        splitterPos: number;
        splitterType: string;
        splitter: Window;
        childList: Window[];
        drawerWidth: number;
        pos: number;
        type: typeof SPLIT_TYPE;
        menuIcon: HTMLDivElement;
        /**
            *Creates an instance of Splitter.
            * @param {number} [splitPos]
            * @param {('ns'|'sn'|'ew'|'we')} [splitType] 分割領域のタイプ
            * @memberof Splitter
            */
        constructor(splitPos?: number, splitType?: typeof SPLIT_TYPE);
        /**
            *子ウインドウの追加
            *
            * @param {number} index 追加位置
            * @param {Window} child 追加ウインドウ
            * @param {('left' | 'right' | 'top' | 'bottom' | 'client' | null)} [arrgement] ドッキングタイプ
            * @memberof Splitter
            */
        addChild(index: number | Window, child: Window | any, arrgement?: 'left' | 'right' | 'top' | 'bottom' | 'client' | null): void;
        /**
            *子ウインドウを切り離す
            *
            * @param {number} index 削除位置
            * @param {Window} [child] 削除ウインドウ
            * @memberof Splitter
            */
        removeChild(index: number | Window, child?: Window): void;
        /**
            *子ウインドウを全て切り離す
            *
            * @param {number} [index] 削除位置
            * @memberof Splitter
            */
        removeChildAll(index?: number): void;
        /**
            *分割バーの位置設定
            *
            * @param {number} pos
            * @param {('ns'|'sn'|'ew'|'we')} [type]
            * @memberof Splitter
            */
        setSplitterPos(pos: number, type?: 'ns' | 'sn' | 'ew' | 'we'): void;
        /**
            *動的バーの設定
            *
            * @param {boolean} flag true:有効 false:無効
            * @memberof Splitter
            */
        setOverlay(flag: boolean, size?: number): void;
        /**
            *子ウインドウの取得
            *
            * @param {number} index 位置
            * @returns {Window} 子ウインドウ
            * @memberof Splitter
            */
        getChild(index: number): Window;
}

export interface ITEM_OPTION {
    label?: string;
    type?: 'date' | 'textbox' | 'checkbox' | 'select' | 'submit';
    name?: string;
    value?: string | number | boolean | Date;
    link?: string;
    image?: string;
    image_width?: string;
    events?: {
        [key: string]: object;
    };
    options?: {
        name: string;
        value: string | number;
    }[];
}
export class TableFormView extends Window {
    table: HTMLDivElement;
    items: HTMLDivElement;
    footer: HTMLDivElement;
    constructor(params?: WINDOW_PARAMS);
    addItem(params: ITEM_OPTION | ITEM_OPTION[]): HTMLDivElement | HTMLLabelElement | HTMLButtonElement | undefined;
    getItem(name: string): Element | null;
    getParams(): {
        [key: string]: string | number | boolean;
    };
    setParams(params: {
        [key: string]: string | number | boolean;
    }): void;
}

export class TextBox extends Window {
    nodeLabel: HTMLElement;
    nodeText: HTMLInputElement;
    constructor(params?: {
        text?: string;
        label?: string;
        type?: string;
        image?: string;
    });
    setText(text: string): void;
    getText(): string;
    setLabel(text: string): void;
    getLabel(): string;
    getTextNode(): HTMLInputElement;
}

export interface TREEVIEW_EVENT_SELECT {
        item: TreeItem;
}
export interface TREEVIEW_EVENT_DROP {
        item: TreeItem;
        event: DragEvent;
}
export interface TREEVIEW_EVENT_DRAG_START {
        item: TreeItem;
        event: DragEvent;
}
export interface TREEVIEW_EVENT_OPEN {
        item: TreeItem;
        opened: boolean;
}
export interface TreeViewEventMap extends WINDOW_EVENT_MAP {
        "itemOpen": TREEVIEW_EVENT_OPEN;
        "itemSelect": TREEVIEW_EVENT_SELECT;
        "itemDblClick": TREEVIEW_EVENT_SELECT;
        "itemDrop": TREEVIEW_EVENT_DROP;
        "itemDragStart": TREEVIEW_EVENT_DRAG_START;
}
/**
    *
    *
    * @export
    * @class TreeItem
    */
export class TreeItem {
        /**
            *Creates an instance of TreeItem.
            * @param {string} [label]
            * @param {boolean} [opened]
            * @memberof TreeItem
            */
        constructor(label?: string, opened?: boolean);
        /**
            *アイテムのノードを返す
            *
            * @returns {HTMLElement}
            * @memberof TreeItem
            */
        getNode(): HTMLElement;
        /**
            *アイテムのラベル部分のノードを返す
            *
            * @returns {HTMLElement}
            * @memberof TreeItem
            */
        getBody(): HTMLElement;
        /**
            *アイテムに対してキーを関連付ける
            *
            * @param {string} name
            * @param {*} value
            * @memberof TreeItem
            */
        setKey(name: string, value: any): void;
        /**
            *アイテムのキーを取得する
            *
            * @param {string} name
            * @returns
            * @memberof TreeItem
            */
        getKey(name: string): string;
        /**
            *アイテムを追加する
            *
            * @param {*} [label] ラベル
            * @param {boolean} [opened] オープン状態
            * @returns {TreeItem} 追加したアイテム
            * @memberof TreeItem
            */
        addItem(label?: string | [string, any], opened?: boolean): TreeItem;
        /**
            *子アイテムを全てクリア
            *
            * @memberof TreeItem
            */
        clearItem(): void;
        /**
            *自分自身を親から切り離す
            *
            * @memberof TreeItem
            */
        removeItem(): void;
        /**
            *子アイテムの数を返す
            *
            * @returns {number}
            * @memberof TreeItem
            */
        getChildCount(): number;
        /**
            *アイテムに関連付ける値を設定
            *
            * @param {*} value
            * @memberof TreeItem
            */
        setItemValue(value: any): void;
        /**
            *アイテムに関連付けた値を取得
            *
            * @returns {*}
            * @memberof TreeItem
            */
        getItemValue(): any;
        /**
            *アイテムのラベルを設定
            *
            * @param {string} value
            * @memberof TreeItem
            */
        setItemText(value: string): void;
        /**
            *アイテムのラベルを取得
            *
            * @returns {string}
            * @memberof TreeItem
            */
        getItemText(): string;
        /**
            *子アイテムを取得
            *
            * @param {number} index
            * @returns {TreeItem}
            * @memberof TreeItem
            */
        getChildItem(index: number): TreeItem;
        /**
            *親アイテムを取得
            *
            * @returns {TreeItem}
            * @memberof TreeItem
            */
        getParentItem(): TreeItem | null;
        /**
            *自分を含めた階層から値を参照してアイテムを探す
            *
            * @param {*} value
            * @returns {TreeItem}
            * @memberof TreeItem
            */
        findItemFromValue(value: any): TreeItem | null;
        /**
            *ツリーを展開する
            *
            * @param {boolean} opened
            * @param {boolean} [anime]
            * @memberof TreeItem
            */
        openItem(opened: boolean, anime?: boolean): void;
        /**
            *アイテムを選択する
            *
            * @memberof TreeItem
            */
        selectItem(scroll?: boolean): void;
        /**
            *所属先のTreeViewを返す
            *
            * @returns {TreeView}
            * @memberof TreeItem
            */
        getTreeView(): TreeView | null;
}
/**
    *TreeView用クラス
    *
    * @export
    * @class TreeView
    * @extends {Window}
    */
export class TreeView extends Window {
        /**
            *Creates an instance of TreeView.
            * @memberof TreeView
            */
        constructor(params?: WINDOW_PARAMS);
        /**
            * 設定されている相対を条件にアイテムを検索
            *
            * @param {*} value
            * @returns {TreeItem}
            * @memberof TreeView
            */
        findItemFromValue(value: any): TreeItem | null;
        /**
            *最上位のアイテムを返す
            *
            * @returns {TreeItem}
            * @memberof TreeView
            */
        getRootItem(): TreeItem;
        /**
            *最上位の子としてアイテムを追加する
            *
            * @param {*} [label]
            * @param {boolean} [opened]
            * @returns {TreeItem}
            * @memberof TreeView
            */
        addItem(label?: string | [string, any], opened?: boolean): TreeItem;
        /**
            *アイテムを全て削除する
            *
            * @memberof TreeView
            */
        clearItem(): void;
        /**
            *アイテムを選択する
            *子アイテムが使用するので基本的には直接呼び出さない
            * @param {TreeItem} item 選択するアイテム
            * @memberof TreeView
            */
        selectItem(item: TreeItem, scroll?: boolean): void;
        /**
            * 設定されている値を条件にアイテムを選択
            *
            * @param {*} value
            * @memberof TreeView
            */
        selectItemFromValue(value: any): void;
        /**
            *選択されているアイテムを返す
            *
            * @returns 選択されているアイテム
            * @memberof TreeView
            */
        getSelectItem(): TreeItem | null;
        /**
            *選択されているアイテムの値を返す
            *
            * @returns
            * @memberof TreeView
            */
        getSelectItemValue(): any;
        /**
            *アイテムにドラッグドロップされたら発生
            *
            * @param {'itemDrop'} type
            * @param {(event: TREEVIEW_EVENT_DROP) => void} callback
            * @memberof TreeView
            */
        addEventListener<K extends keyof TreeViewEventMap>(type: K, listener: (ev: TreeViewEventMap[K]) => any): void;
}

/**
    * 位置設定用
 */
export interface Point {
        x: number;
        y: number;
}
/**
    * サイズ設定用
 */
export interface Size {
        width: number;
        height: number;
}
export interface JWFEvent extends Event {
        params: any;
}
/**
    * ドラッグドロップ機能用
    *
    * @export
    * @interface MovePoint
    * @param {Point} basePoint クリック基準位置
    * @param {Point} nowPoint 移動位置位置
    * @param {Point} nodePoint ノード初期位置
    * @param {Size} nodeSize ノード初期サイズ
    */
export interface MovePoint {
        event: MouseEvent | TouchEvent;
        basePoint: Point;
        nowPoint: Point;
        nodePoint: Point;
        nodeSize: Size;
}
/**
    *ウインドウノードにWindowの参照を持たせる
 *
 * @interface JNode
 * @extends {HTMLElement}
 */
export interface JNode extends HTMLElement {
        Jwf: Window;
}
/**
    * ウインドウ等総合管理クラス
    *
    * @export
    * @class Jwf
    */
export class WindowManager {
        static nodeX: number;
        static nodeY: number;
        static baseX: number;
        static baseY: number;
        static nodeWidth: number;
        static nodeHeight: number;
        static moveNode: HTMLElement | null;
        static frame: number | null;
        static layoutForced: boolean;
        static layoutHandler: NodeJS.Timeout | null;
        /**
            * マウスとタッチイベントの座標取得処理
            * @param  {MouseEvent|TouchEvent} e
            * @returns {Point} マウスの座標
            */
        static getPos(e: MouseEvent | TouchEvent): Point;
        /**
            * 対象ノードに対して移動を許可し、イベントを発生させる
            *
            * @static
            * @param {HTMLElement} node
            * @memberof Jwf
            */
        static enableMove(node: HTMLElement): void;
        /**
            * ノードに対してイベントを発生させる
            *
            * @static
            * @param {HTMLElement} node 対象ノード
            * @param {string} ename イベント名
            * @param {*} [params] イベント発生時にevent.paramsの形で送られる
            * @memberof Jwf
            */
        static callEvent(node: HTMLElement, ename: string, params?: any): void;
        /**
            *イベントを作成する
                 *
                 * @static
                 * @param {string} ename イベント名
                 * @param {*} [params] イベント発生時にevent.paramsの形で送られる
                 * @returns {Event} 作成したイベント
                 * @memberof Jwf
                 */
        static createEvent(ename: string, params?: any): Event;
        /**
            *ノードを作成する
                 *
                 * @static
                 * @param {string} tagName タグ名
                 * @param {*} [params] タグパラメータ
                 * @returns {HTMLElement} 作成したノード
                 * @memberof Jwf
                 */
        static createElement(tagName: string, params?: any): HTMLElement;
        /**
            *ウインドウレイアウトの更新要求
                 *実際の処理は遅延非同期で行われる
                 *
                 * @static
                 * @param {boolean} flag	true:全Window強制更新 false:更新の必要があるWindowのみ更新
                 * @memberof Jwf
                 */
        static layout(flag: boolean): void;
}
/**
    *ウインドウ管理用基本データ
         *
         * @interface JDATA
         */
export interface JDATA {
        x: number;
        y: number;
        width: number;
        height: number;
        frameSize: number;
        titleSize: number;
        redraw: boolean;
        parent: Window | null;
        orderTop: boolean;
        orderLayer: number;
        layoutFlag: boolean;
        clientArea: HTMLElement | null;
        style: string | null;
        visible: boolean;
        minimize: boolean;
        normalX: number;
        normalY: number;
        normalWidth: number;
        normalHeight: number;
        margin: {
                x1: number;
                y1: number;
                x2: number;
                y2: number;
        };
        padding: {
                x1: number;
                y1: number;
                x2: number;
                y2: number;
        };
        moveable: boolean;
        reshow: boolean;
        animation: {
                [key: string]: string;
        };
        animationEnable: boolean;
        noActive: boolean;
        autoSizeNode: HTMLElement | null;
}
export interface WINDOW_EVENT_MAP {
        any: any;
        active: {
                active: boolean;
        };
        closed: {};
        layout: {};
        layouted: {};
}
export interface WINDOW_PARAMS {
        frame?: boolean;
        title?: boolean;
        layer?: number;
        overlap?: boolean;
}
/**
    *ウインドウ基本クラス
         *
         * @export
         * @class Window
         */
export class Window {
        /**
            * Creates an instance of Window.
            * @param {{ frame?: boolean, title?: boolean, layer?: number}} [params] ウインドウ作成用パラメータ
            * {	frame?:boolean,
            * 		title?:boolean,
            * 		layer?:number
            * }
            * @memberof Window
            */
        constructor(params?: WINDOW_PARAMS);
        setOverlap(flag: boolean): void;
        setJwfStyle(style: string): void;
        getJwfStyle(): string | null;
        /**
            *イベントの受け取り
                 *
                 * @param {string} type イベントタイプ
                 * @param {*} listener コールバックリスナー
                 * @memberof Window
                 */
        addEventListener<K extends keyof WINDOW_EVENT_MAP>(type: K | string, listener: (this: Window, ev: WINDOW_EVENT_MAP[K]) => any): void;
        /**
            *イベントの削除
                 *
                 * @template K
                 * @param {(K | string)} type イベントタイプ
                 * @param {(this: Window, ev: WINDOW_EVENT_MAP[K]) => any} listener コールバックリスナー
                 * @memberof Window
                 */
        removeEventListener<K extends keyof WINDOW_EVENT_MAP>(type: K | string, listener?: (this: Window, ev: WINDOW_EVENT_MAP[K]) => any): void;
        /**
            *イベントの要求
                 *
                 * @param {string} type イベントタイプ
                 * @param {*} params パラメータ
                 * @memberof Window
                 */
        callEvent<K extends keyof WINDOW_EVENT_MAP>(type: K | string, params: WINDOW_EVENT_MAP[K] | any): void;
        /**
            *ウインドウのノードを得る
                 *
                 * @returns {HTMLElement} ウインドウノード
                 * @memberof Window
                 */
        getNode(): HTMLElement;
        /**
            *ウインドウの移動
                 *
                 * @param {number} x
                 * @param {number} y
                 * @memberof Window
                 */
        movePos(x: number, y: number): void;
        setNoActive(flag: boolean): void;
        /**
            *ウインドウの位置設定
                 *引数を省略した場合は親のサイズを考慮して中央へ
                 * @param {number} [x]
                 * @param {number} [y]
                 * @memberof Window
                 */
        setPos(x?: number, y?: number): void;
        /**
            *X座標の設定
                 *
                 * @param {number} x
                 * @memberof Window
                 */
        setPosX(x: number): void;
        /**
            *Y座標の設定
                 *
                 * @param {number} y
                 * @memberof Window
                 */
        setPosY(y: number): void;
        /**
            *親ウインドウの取得
                 *
                 * @returns {Window} 親ウインドウ
                 * @memberof Window
                 */
        getParent(): Window | null;
        /**
            *クライアント領域のドラッグによる移動の許可
                 *
                 * @param {boolean} moveable true:許可 false:不許可
                 * @memberof Window
                 */
        setMoveable(moveable: boolean): void;
        /**
            *X座標を返す
                 *
                 * @returns {number}
                 * @memberof Window
                 */
        getPosX(): number;
        /**
            *Y座標を返す
                 *
                 * @returns {number}
                 * @memberof Window
                 */
        getPosY(): number;
        /**
            *ウインドウの幅を返す
                 *
                 * @returns
                 * @memberof Window
                 */
        getWidth(): number;
        /**
            *ウインドウの高さを返す
                 *
                 * @returns
                 * @memberof Window
                 */
        getHeight(): number;
        /**
            *ウインドウサイズの設定
                 *
                 * @param {number} width
                 * @param {number} height
                 * @memberof Window
                 */
        setSize(width: number, height: number): void;
        /**
            *ウインドウの幅の設定
                 *
                 * @param {number} width
                 * @memberof Window
                 */
        setWidth(width: number): void;
        /**
            *ウインドウの高さの設定
                 *
                 * @param {number} height
                 * @memberof Window
                 */
        setHeight(height: number): void;
        /**
            * クライアント領域のpadding設定
            *
            * @param {number} x1
            * @param {number} y1
            * @param {number} x2
            * @param {number} y2
            * @memberof Window
            */
        setPadding(x1: number, y1: number, x2: number, y2: number): void;
        setPadding(all: number): void;
        /**
            *配置時のマージン設定
                 *
                 * @param {number} x1
                 * @param {number} y1
                 * @param {number} x2
                 * @param {number} y2
                 * @memberof Window
                 */
        setMargin(x1: number, y1: number, x2: number, y2: number): void;
        setMargin(all: number): void;
        /**
            *ウインドウの可視状態の取得
                 *
                 * @returns {boolean}
                 * @memberof Window
                 */
        isVisible(): boolean;
        /**
            *ウインドウの可視状態の設定
                 *
                 * @param {boolean} flag
                 * @memberof Window
                 */
        setVisible(flag: boolean): void;
        /**
            *ウインドウの重ね合わせを最上位に設定
                 *
                 * @param {boolean} flag
                 * @memberof Window
                 */
        setOrderTop(flag: boolean): void;
        /**
            *ウインドウの重ね合わせ順位の設定
                 *値が大きいほど上位
                 * @param {number} level デフォルト:0 FrameWindow:10
                 * @memberof Window
                 */
        setOrderLayer(level: number): void;
        /**
            *レイアウトの再構成要求
                 *
                 * @memberof Window
                 */
        layout(): void;
        active(flag?: boolean): void;
        /**
            *親のクライアント領域を返す
                 *
                 * @returns
                 * @memberof Window
                 */
        getParentWidth(): number;
        /**
            *親のクライアント領域を返す
                 *
                 * @returns
                 * @memberof Window
                 */
        getParentHeight(): number;
        /**
            *子ウインドウのサイズを再計算
         *
         * @param {boolean} flag true:強制再計算 false:必要があれば再計算
         * @returns {boolean} 再計算の必要を行ったかどうか
         * @memberof Window
         */
        onMeasure(flag: boolean): boolean;
        /**
            *位置やサイズの確定処理
                 *非同期で必要なときに呼び出されるので、基本的には直接呼び出さないこと
                 * @param {boolean} flag true:強制 false:必要なら
                 * @memberof Window
                 */
        onLayout(flag: boolean): void;
        show(flag: boolean): void;
        /**
            *ウインドウの重ね合わせ順位を上位に持って行く
                 *
                 * @param {boolean} [flag] ウインドウをアクティブにするかどうか
                 * @memberof Window
                 */
        foreground(flag?: boolean): void;
        /**
            *クライアント領域のスクロールの可否
                 *
                 * @param {boolean} flag
                 * @memberof Window
                 */
        setScroll(flag: boolean): void;
        /**
            *クライアント領域のスクロールが有効かどうか
                 *
                 * @returns {boolean}
                 * @memberof Window
                 */
        isScroll(): boolean;
        /**
            *ウインドウを閉じる
                 *
                 * @memberof Window
                 */
        close(): void;
        /**
            *アニメーションの設定
                 *
                 * @param {string} name アニメーション名
                 * @param {string} value アニメーションパラメータ
                 * @memberof Window
                 */
        setAnimation(name: string, value: string): void;
        /**
            *絶対位置の取得
                 *
                 * @returns
                 * @memberof Window
                 */
        getAbsX(): number;
        /**
         *絶対位置の取得
         *
         * @returns
         * @memberof Window
         */
        getAbsY(): number;
        /**
            *クライアントノードを返す
                 *WindowクラスはgetNode()===getClient()
                 *FrameWindowはgetNode()!==getClient()
                 * @returns {HTMLElement}
                 * @memberof Window
                 */
        getClient(): HTMLElement;
        /**
            *クライアント領域の基準位置を返す
                 *
                 * @returns
                 * @memberof Window
                 */
        getClientX(): number;
        /**
            *クライアント領域の基準位置を返す
                 *
                 * @returns
                 * @memberof Window
                 */
        getClientY(): number;
        /**
            *クライアントサイズを元にウインドウサイズを設定
                 *
                 * @param {number} width
                 * @param {number} height
                 * @memberof Window
                 */
        setClientSize(width: number, height: number): void;
        /**
            *クライアントサイズを元にウインドウサイズを設定
                 *
                 * @param {number} width
                 * @memberof Window
                 */
        setClientWidth(width: number): void;
        /**
            *クライアントサイズを元にウインドウサイズを設定
                 *
                 * @param {number} height
                 * @memberof Window
                 */
        setClientHeight(height: number): void;
        /**
            *クライアントサイズを取得
                 *
                 * @returns {number}
                 * @memberof Window
                 */
        getClientWidth(): number;
        /**
            *クライアントサイズを取得
                 *
                 * @returns {number}
                 * @memberof Window
                 */
        getClientHeight(): number;
        /**
            *子ノードの追加
                 *
                 * @param {Window} child 子ウインドウ
                 * @param {('left' | 'right' | 'top' | 'bottom' | 'client' | null)} [style] ドッキング位置
                 * @memberof Window
                 */
        addChild(child: Window, style?: 'left' | 'right' | 'top' | 'bottom' | 'client' | null): void;
        /**
            *ドッキングスタイルの設定
                 *
                 * @param {('left' | 'right' | 'top' | 'bottom' | 'client' | null)} style ドッキング位置
                 * @memberof Window
                 */
        setChildStyle(style: 'left' | 'right' | 'top' | 'bottom' | 'client' | null): void;
        /**
            *子ウインドウを全て切り離す
                 *
                 * @memberof Window
                 */
        removeChildAll(): void;
        /**
            *子ウインドウを切り離す
                 *
                 * @param {Window} child
                 * @returns
                 * @memberof Window
                 */
        removeChild(child: Window): void;
        /**
            *自動サイズ調整の状態を取得
                 *
                 * @returns
                 * @memberof Window
                 */
        isAutoSize(): boolean;
        /**
            *自動サイズ調整を設定
                 *
                 * @param {boolean} scale
                 * @memberof Window
                 */
        setAutoSize(scale: boolean): void;
        /**
            *タイトル設定
                 *
                 * @param {string} title
                 * @memberof Window
                 */
        setTitle(title: string): void;
        /**
            *タイトル取得
                 *
                 * @returns {string}
                 * @memberof Window
                 */
        getTitle(): string;
        /**
            *ウインドウの最大化
                 *
                 * @param {boolean} flag
                 * @memberof Window
                 */
        setMaximize(flag: boolean): void;
        /**
            *ウインドウの最小化
                 *
                 * @param {boolean} flag
                 * @memberof Window
                 */
        setMinimize(flag: boolean): void;
}
/**
    *フレームウインドウクラス
         *
         * @export
         * @class FrameWindow
         * @extends {Window}
         */
export class FrameWindow extends Window {
        constructor(param?: WINDOW_PARAMS);
}

}