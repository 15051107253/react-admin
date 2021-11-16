import { atom, useRecoilState } from 'recoil'

const appTabsState = atom({
  key: 'appTabsState',
  default: [],
})

const useAppTabs = () => {
  const [tabs, setTabs] = useRecoilState(appTabsState)
  const setAppTabs = (currtab, type) => {
    console.log(type)
    if (type === 'delete') {
      let newTabs = tabs.filter((item) => item.id !== currtab.id)
      console.log(newTabs)
      setTabs([...newTabs])
    } else {
      if (!tabs.filter((item) => item.id === currtab.id).length) {
        setTabs([...tabs, { ...currtab }])
      }
    }
  }
  return { appTabs: tabs, setAppTabs }
}

const appCollapsedState = atom({
  key: 'appCollapsedState',
  default: false,
})

const useAppCollapsed = () => useRecoilState(appCollapsedState)

const openKeysState = atom({
  key: 'openKeysState',
  default: [],
})

const useOpenKeys = () => useRecoilState(openKeysState)

const selectedKeysState = atom({
  key: 'selectedKeysState',
  default: [],
})

const useSelectedKeys = () => useRecoilState(selectedKeysState)

export { useAppTabs, useAppCollapsed, useOpenKeys, useSelectedKeys }
