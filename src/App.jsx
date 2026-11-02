import { useState } from "react";
import * as Icons from "@ant-design/icons";
import {
  Layout, Menu, Input, Badge, Avatar, Dropdown, Card, Row, Col, Statistic,
  Progress, List, Typography, Button, DatePicker, Space, Tag,
} from "antd";
import dayjs from "dayjs";
import { kpis, studyTypes, centers, aging, alerts, quickLinks } from "./data.js";

const { Header, Sider, Content } = Layout;
const { Title, Text, Link } = Typography;
const Ico = ({ name, ...p }) => { const C = Icons[name]; return C ? <C {...p} /> : null; };

const menuItems = [
  { key: "dashboard", icon: <Icons.HomeFilled />, label: "Dashboard" },
  { key: "reports", icon: <Icons.BarChartOutlined />, label: "Reports" },
  { key: "search", icon: <Icons.SearchOutlined />, label: "Search" },
  { key: "alerts", icon: <Icons.BellOutlined />, label: <span className="menu-badge">Alerts <Badge count={3} /></span> },
];

function KpiTile({ k }) {
  return (
    <div className="kpi">
      <div className="kpi-icon" style={{ background: k.color }}><Ico name={k.icon} /></div>
      <div>
        <Statistic value={k.value} />
        <Text>{k.label}</Text><br />
        <Link href="#">View all →</Link>
      </div>
    </div>
  );
}

function Donut({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = 40, c = 2 * Math.PI * r;
  let off = 0;
  return (
    <div className="donut-wrap">
      <svg viewBox="0 0 100 100" width="160" height="160" role="img" aria-label="Studies by type">
        {data.map((d) => {
          const len = (d.value / total) * c;
          const el = <circle key={d.label} cx="50" cy="50" r={r} fill="none" stroke={d.color} strokeWidth="16"
            strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-off} transform="rotate(-90 50 50)" />;
          off += len;
          return el;
        })}
        <text x="50" y="50" textAnchor="middle" className="donut-n">{total}</text>
        <text x="50" y="61" textAnchor="middle" className="donut-l">Active</text>
      </svg>
      <List size="small" split={false} dataSource={data} style={{ flex: 1, minWidth: 140 }}
        renderItem={(d) => (
          <List.Item extra={<Text type="secondary">{d.value}</Text>} style={{ padding: "4px 0" }}>
            <Space><Badge color={d.color} />{d.label}</Space>
          </List.Item>
        )} />
    </div>
  );
}

function Bars({ data }) {
  return (
    <div className="bars">
      {data.map((d) => (
        <div className="bar-col" key={d.label}>
          <Text type="secondary" className="bar-val">{d.value}</Text>
          <div className="bar" style={{ height: `${(d.value / 10) * 100}%`, background: d.color }} />
          <Text type="secondary" className="bar-label">{d.label}</Text>
        </div>
      ))}
    </div>
  );
}

function Aging({ data }) {
  return (
    <div className="aging">
      {data.map((d) => (
        <div className="aging-row" key={d.label}>
          <Text>{d.label}</Text>
          <Progress percent={(d.value / 12) * 100} showInfo={false} strokeColor={d.color} strokeLinecap="butt" size={["100%", 20]} />
          <Text strong>{d.value}</Text>
        </div>
      ))}
    </div>
  );
}

const alertIcon = {
  danger: <Icons.WarningFilled style={{ color: "#dc2626" }} />,
  warn: <Icons.WarningFilled style={{ color: "#e0a800" }} />,
  info: <Icons.InfoCircleFilled style={{ color: "#2563eb" }} />,
  ok: <Icons.CheckCircleFilled style={{ color: "#2e9e44" }} />,
  mail: <Icons.MailOutlined style={{ color: "#6d3fc0" }} />,
};

export default function App() {
  const [range, setRange] = useState([dayjs("2026-04-19"), dayjs("2026-04-25")]);
  return (
    <Layout className="shell">
      <Header className="topbar">
        <div className="brand"><b>ABCD</b><span>Investigative and Audit Response System</span></div>
        <Input className="search" prefix={<Icons.SearchOutlined />} placeholder="Search studies, recommendations, or keywords..." allowClear />
        <Badge count={3} size="small"><Button type="text" icon={<Icons.BellOutlined style={{ color: "#fff", fontSize: 18 }} />} aria-label="Notifications" /></Badge>
        <Dropdown menu={{ items: [{ key: "p", label: "Profile" }, { key: "o", label: "Sign out" }] }}>
          <Space className="user"><Avatar style={{ background: "#2563eb" }}>JD</Avatar>
            <div><b>John Doe</b><small>Liaison / PA Staff</small></div><Icons.DownOutlined /></Space>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={250} breakpoint="lg" collapsedWidth={0} className="sider">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]} items={menuItems} />
          <div className="sider-bottom">
            <Menu theme="dark" mode="inline" selectable={false} items={[
              { key: "s", icon: <Icons.SettingOutlined />, label: "Settings" },
              { key: "h", icon: <Icons.QuestionCircleOutlined />, label: "Help" }]} />
            <div className="agency"><strong>FDA</strong><span>U.S. Food and Drug Administration<br /><em>Internal Use Only</em></span></div>
          </div>
        </Sider>
        <Content className="main">
          <div className="main-head">
            <div><Title level={2} style={{ margin: 0 }}>Program Dashboard</Title><Text type="secondary">Studies and Recommendations Overview</Text></div>
            <Space>
              <Text type="secondary" style={{ fontSize: 12 }}>Last Updated: Apr 25, 2026 10:24 AM</Text>
              <Button type="text" size="small" icon={<Icons.ReloadOutlined />} aria-label="Refresh" />
              <DatePicker.RangePicker value={range} onChange={(v) => v && setRange(v)} allowClear={false} />
            </Space>
          </div>

          <Card className="mb">
            <Row gutter={[16, 16]}>
              {kpis.map((k) => <Col key={k.id} xs={24} sm={12} xl={{ flex: "20%" }}><KpiTile k={k} /></Col>)}
              <Col xs={24} sm={12} xl={{ flex: "20%" }}>
                <div className="kpi">
                  <div className="kpi-icon" style={{ background: "#2e9e44" }}><Icons.CheckCircleOutlined /></div>
                  <div style={{ flex: 1 }}>
                    <Statistic value={91} suffix="%" />
                    <Text>Program Health</Text>
                    <Progress percent={91} showInfo={false} size="small" strokeColor={{ "0%": "#2e9e44", "100%": "#dc2626" }} />
                  </div>
                </div>
              </Col>
            </Row>
          </Card>

          <Row gutter={[16, 16]}>
            <Col xs={24} lg={8} xl={6}><Card title="Studies by Type" className="fill"><Donut data={studyTypes} /></Card></Col>
            <Col xs={24} lg={16} xl={9}><Card title="Studies by FDA Center/Office" className="fill"><Bars data={centers} /></Card></Col>
            <Col xs={24} xl={9} className="alerts-col" order={3}>
              <Card title="Alerts & Notifications" extra={<Link href="#">View all →</Link>} className="fill">
                <List itemLayout="horizontal" dataSource={alerts} renderItem={(a) => (
                  <List.Item extra={<Text type="secondary" style={{ fontSize: 11 }}>{a.when}</Text>}>
                    <List.Item.Meta avatar={alertIcon[a.type]} title={<span style={{ fontSize: 13 }}>{a.title}</span>} description={<span style={{ fontSize: 12 }}>{a.sub}</span>} />
                  </List.Item>)} />
              </Card>
            </Col>
            <Col xs={24} lg={8} xl={6}><Card title="Quick Links" className="fill">
              <div className="quick-grid">
                {quickLinks.map((q) => <Button key={q.label} type="text" className="quick-btn"><Ico name={q.icon} style={{ fontSize: 24 }} /><span>{q.label}</span></Button>)}
              </div></Card></Col>
            <Col xs={24} lg={16} xl={9}><Card title="Recommendation Aging" className="fill"><Aging data={aging} /></Card></Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
