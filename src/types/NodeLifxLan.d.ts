declare module "node-lifx-lan" {
    interface Features {
        color?: boolean;
        infrared?: boolean;
        multizone?: boolean;
    }

    interface Group {
        guid?: string;
        label?: string;
    }

    interface Location {
        guid?: string;
        lable?: string;
    }

    interface Filter {
        label?: string;
        productId?: number;
        features?: Features;
        group?: Group;
        location?: Location;
    }

    interface HsbColor {
        hue: number;
        saturation: number;
        brightness?: number;
    }

    interface RgbColor {
        red: number;
        green: number;
        blue: number;
        kelvin?: number;
    }

    interface CssColor {
        css: string;
        kelvin?: number;
    }

    type Color = HsbColor | RgbColor | CssColor;

    interface TurnOnParams {
        color?: Color;
        duration?: number;
    }

    interface FilteredTurnOnParams extends TurnOnParams {
        filter?: Filter;
    }

    interface TurnOffParams {
        duration?: number;
    }

    interface TurnOffFilterParams extends TurnOffParams {
        filters?: Filter;
    }

    interface BroadcastColorParams {
        color: Color;
        duration?: number;
    }

    interface DeviceFeatures {
        color: boolean;
        infrared: boolean;
        multizone: boolean;
    }

    interface DeviceLocation {
        guid: string;
        label: string;
        updated: Date;
    }

    interface DeviceGroup {
        guid: string;
        label: string;
        updated: Date;
    }

    interface DeviceMultizone {
        count: number;
    }

    interface DeviceInfo {
        label: string;
        vendorId: number;
        productId: number;
        productName: string;
        hwVersion: number;
        features: DeviceFeatures;
        location: DeviceLocation;
        group: DeviceGroup;
        multizone: DeviceMultizone;
    }

    interface LightStateInfrared {
        brightness: number;
    }

    interface LightStateMultizone {
        count: number;
        colors: HsbColor[];
    }

    interface LightState {
        color: HsbColor;
        power: number;
        label: string;
        infrared?: LightStateInfrared;
        multizone?: LightStateMultizone;
    }

    interface DeviceService {
        service: number;
        port: number;
    }

    interface SignalInfo {
        signal: number;
        tx: number;
        rx: number;
    }

    interface FirmwareInfo {
        build: Date,
        version: number;
    }

    interface PowerInfo {
        level: number;
    }

    interface LabelInfo {
        label: string;
    }

    interface DeviceVersionInfo {
        vendorId: number;
        vendorName: string;
        productId: number;
        productName: string;
        hwVersion: number;
        features: DeviceVersionFeatureInfo;
    }

    interface DeviceVersionFeatureInfo {
        color: boolean;
        infrared: boolean;
        multizone: boolean;
    }

    interface DeviceTimeInfo {
        time: Date;
        uptime: number;
        downtime: number;
    }

    interface DeviceLocationInfo {
        guid: string;
        label: string;
        update: Date;
    }

    interface DeviceLocationInfoParams {
        guid: string;
        label: string;
        update?: Date;
    }

    interface DeviceEchoRequest {
        text: string;
    }

    interface IndividualLightState {

        color: HsbColor;
        power: number;
        label: string;
    }

    interface WaveformParams {
        transient: number;
        color: HsbColor;
        period: number;
        cycles: number;
        skew_ratio?: number;
        waveform: number;
    }

    interface DevicePowerParams {
        level: number;
        duration?: number;
    }

    interface SetMultizoneColorParams {
        start: number;
        end: number;
        color: Color;
        duration?: number;
        apply?: number;
    }

    interface GetMultizoneColorParams {
        start: number;
        end: number;
    }

    interface GetMultizoneColorResults {
        count: number;
        index: number;
        colors: HsbColor[];
    }

    interface LifxLanDevice {
        turnOn(params: TurnOnParams): Promise<void>;
        setColor(params: TurnOnParams): Promise<void>;
        turnOff(params: TurnOffParams): Promise<void>;
        getDeviceInfo(): Promise<DeviceInfo>;
        getLightState(): Promise<LightState>;
        deviceGetService(): Promise<DeviceService>;
        deviceGetHostInfo(): Promise<SignalInfo>;
        deviceGetHostFirmware(): Promise<FirmwareInfo>;
        deviceGetWifiInfo(): Promise<SignalInfo>;
        deviceGetWifiFirmware(): Promise<FirmwareInfo>;
        deviceGetPower(): Promise<PowerInfo>;
        deviceSetPower(params: PowerInfo): Promise<void>;
        deviceGetLabel(): Promise<LabelInfo>;
        deviceSetLabel(params: LabelInfo): Promise<void>;
        deviceGetVersion(): Promise<DeviceVersionInfo>;
        deviceGetInfo(): Promise<DeviceTimeInfo>;
        deviceGetLocation(): Promise<DeviceLocationInfo>;
        deviceSetLocation(params: DeviceLocationInfoParams): Promise<void>;
        deviceGetGroup(): Promise<DeviceLocationInfo>;
        deviceSetGroup(params: DeviceLocationInfoParams): Promise<void>;
        deviceEchoRequest(params: DeviceEchoRequest): Promise<DeviceEchoRequest>;
        lightGet(): Promise<IndividualLightState>;
        lightSetColor(params: BroadcastColorParams): Promise<void>;
        lightSetWaveForm(params: WaveformParams): Promise<void>;
        lightGetPower(): Promise<PowerInfo>;
        lightSetPower(params: DevicePowerParams): Promise<void>;
        lightGetInfrared(): Promise<LightStateInfrared>;
        lightSetInfrared(params: LightStateInfrared): Promise<void>;
        multiZoneSetColorZones(params: SetMultizoneColorParams): Promise<void>;
        multiZoneGetColorZones(params: GetMultizoneColorParams): Promise<GetMultizoneColorResults>;
    }

    interface DiscoveryParams {
        wait?: number;
    }

    interface LifxLan {
        init(): Promise<void>;
        discover(params?: DiscoveryParams): Promise<LifxLanDevice[]>;
        turnOnBroadcast(params?: TurnOnParams): Promise<void>;
        setColorBroadcast(params: BroadcastColorParams): Promise<void>;
        turnOffBroadcast(params?: TurnOffParams): Promise<void>;
        turnOnFilter(params?: FilteredTurnOnParams): Promise<void>;
        setColorFilter(params?: TurnOnParams): Promise<void>;
        turnOffFilter(params?: TurnOffFilterParams): Promise<void>;
        destroy(): Promise<void>;
    }

    let LifxLan: LifxLan
    export = LifxLan;
}