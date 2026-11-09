import { OpenVikingProvider } from '@openviking/react/client';
import { FileBrowserEntries } from '@openviking/react/components/file-browser-entries';
import '@openviking/react/components/file-browser-entries/style.css';
import { FileBrowser } from '@openviking/react/modules/file-browser';
import '@openviking/react/modules/file-browser/style.css';

/**
 * 连接真实 OpenViking 服务的文件浏览示例。地址与凭证直接写在示例里，便于本地
 * 查看真实数据；正式接入时由宿主从自己的配置与登录态取值。
 *
 * 服务端需允许本页来源跨域访问，否则浏览器会在请求发出前就拦下来。
 *
 * A file browser wired to a real OpenViking service. The address and credential are
 * inline so real data is visible while reviewing locally; a real host reads them from
 * its own configuration and sign-in state.
 *
 * The service must allow this page's origin, or the browser blocks the request
 * before it is sent.
 */

/** 顶部入口图标，取自控制台的 `assets/context-console/`。 */
const LABELS = {
  searchPlaceholder: '搜索文件 ⌘+K...',
  refresh: '刷新上下文目录',
  empty: '选择一个文件查看内容',
  searchEmpty: '没有匹配的资源',
  searchLoading: '搜索中…',
  loading: '加载中…',
  previewMode: '预览',
  sourceMode: '源码',
  copyPath: '复制路径',
  copyContent: '复制正文',
  viewSwitch: '切换视图',
  l0Summary: 'L0 摘要',
  l1Overview: 'L1 总览',
  summaryEmpty: '暂无生成内容',
  download: '下载',
  tree: {
    empty: '该文件夹为空',
    error: '加载失败',
    retry: '重试',
    loadMore: '加载更多',
    loading: '加载中…',
    expand: '展开 {name}',
    collapse: '折叠 {name}',
  },
} as const;

export default function FileBrowserBasic() {
  return (
    <div lang="zh-CN" style={{ height: 720, minWidth: 720 }}>
      <OpenVikingProvider
        baseURL="http://n37-077-126.byted.org:1933"
        apiKey="ZGVmYXVsdA.ZGVmYXVsdA.ZTdiZGVkZDk3MTlhYzEzNzY1MGYwODhjODUwZTAzZmU5MTYxMTNhODNiNmE5YmY2ODgzMTE1YjBlNzYzNGNhNg"
        accountId="default"
        userId="default"
        credentials="include"
      >
        <FileBrowser
          locale="zh-CN"
          defaultExpandedUri="viking://user/default"
          labels={LABELS}
          toolbarActions={
            <FileBrowserEntries
              onConnectAgent={() => {}}
              onImportResources={() => {}}
              labels={{
                connectAgent: '连接 Agent',
                importResources: '导入资源',
              }}
            />
          }
        />
      </OpenVikingProvider>
    </div>
  );
}
