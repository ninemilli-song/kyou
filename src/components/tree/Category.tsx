/**
 * Author: ninemilli.song
 */
import * as React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

interface CategoryProps {

}

export default class Category extends React.Component<CategoryProps, any> {
    static defaultProps = {

    }

    render() {
        const loop = data => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode
                        title={ item.name }
                        key={ item.key }>
                        { loop(item.children) }
                    </TreeNode>
                );
            }
            return <TreeNode title={ item.name } key={ item.key }               isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;
        });

        const treeNodes = loop(this.state.treeData);

        return (
            <Tree
                onSelect={ this.onSelect }
                loadData={ this.onLoadData }>
                { treeNodes }
            </Tree>
        );
    }

    private onSelect = (info) => {

    }

    private onLoadData = (treeNode) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const treeData = [...this.state.treeData];
            this.getNewTreeData(treeData, treeNode.props.eventKey, this.generateTreeNodes(treeNode), 2);
            this.setState({ treeData });
            resolve();
          }, 1000);
        });
    }

    private getNewTreeData = (treeData, curKey, child, level) => {
        const loop = (data) => {
            if (level < 1 || curKey.length - 3 > level * 2) return;
                data.forEach((item) => {
                if (curKey.indexOf(item.key) === 0) {
                    if (item.children) {
                        loop(item.children);
                    } else {
                        item.children = child;
                    }
                }
            });
        };
        loop(treeData);
        this.setLeaf(treeData, curKey, level);
    }

    private setLeaf = (treeData, curKey, level) => {
        const loopLeaf = (data, lev) => {
            const l = lev - 1;
            data.forEach((item) => {
                if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
                curKey.indexOf(item.key) !== 0) {
                    return;
                }
                if (item.children) {
                    loopLeaf(item.children, l);
                } else if (l < 1) {
                    item.isLeaf = true;
                }
            });
        };
        loopLeaf(treeData, level + 1);
    }

    private generateTreeNodes = (treeNode) => {
        const arr = [];
        const key = treeNode.props.eventKey;
        for (let i = 0; i < 3; i++) {
            arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
        }
        return arr;
    }
}
