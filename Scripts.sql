USE [SAMA2]
GO
    /****** Object:  Table [dbo].[Amaliaats]    Script Date: 4/1/2022 11:26:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO CREATE TABLE [dbo].[Amaliaats](
        [id] [smallint] NOT NULL,
        [Amaliaat] [nvarchar](50) NOT NULL,
        CONSTRAINT [PK_Amaliaats] PRIMARY KEY CLUSTERED ([id] ASC) WITH (
            PAD_INDEX = OFF,
            STATISTICS_NORECOMPUTE = OFF,
            IGNORE_DUP_KEY = OFF,
            ALLOW_ROW_LOCKS = ON,
            ALLOW_PAGE_LOCKS = ON
        ) ON [PRIMARY]
    ) ON [PRIMARY]
GO
insert into Amaliaats
select ROW_NUMBER() OVER (
        Order by Action
    ) AS RowNumber,
    a.*
from (
        select distinct [Action]
        from [dbo].[TblLogInfo]
    ) as A
SELECT [id],
    [Amaliaat]
FROM [SAMA2].[dbo].[Amaliaats] USE [SAMA2]
GO
    /****** Object:  Table [dbo].[LogXactions]    Script Date: 4/1/2022 11:38:10 AM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON CREATE TABLE [dbo].[LogXactions](
        [Id] [bigint] IDENTITY(1, 1) NOT NULL,
        [Amal] [tinyint] NOT NULL,
        [KholasseAmaliat] [nvarchar](50) NULL,
        [Tozihaat] [nvarchar](max) NULL,
        [Olaviat] [tinyint] NOT NULL,
        [Natijeh] [nvarchar](50) NULL,
        [LogDateTime] [datetime] NOT NULL,
        [Ip] [nvarchar](50) NOT NULL,
        [FullName] [nvarchar](150) NULL,
        [Username] [nvarchar](50) NULL,
        [Agent] [nvarchar](1000) NULL,
        [ProvinceId] [int] NULL,
        [CityId] [int] NULL,
        [LocationId] [bigint] NULL,
        CONSTRAINT [PK_LogXactions] PRIMARY KEY CLUSTERED ([Id] ASC) WITH (
            PAD_INDEX = OFF,
            STATISTICS_NORECOMPUTE = OFF,
            IGNORE_DUP_KEY = OFF,
            ALLOW_ROW_LOCKS = ON,
            ALLOW_PAGE_LOCKS = ON
        ) ON [PRIMARY]
    ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[LogXactions]
ADD CONSTRAINT [DF_LogXactions_Olaviat] DEFAULT ((0)) FOR [Olaviat]
GO
    /****** Object:  Table [dbo].[Amaliaats]    Script Date: 4/1/2022 11:44:25 AM ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON CREATE TABLE [dbo].[NatijehHa](
        [Id] [smallint] NOT NULL,
        [Natijeh] [nvarchar](50) NOT NULL,
        CONSTRAINT [PK_NatijehHa] PRIMARY KEY CLUSTERED ([Id] ASC) WITH (
            PAD_INDEX = OFF,
            STATISTICS_NORECOMPUTE = OFF,
            IGNORE_DUP_KEY = OFF,
            ALLOW_ROW_LOCKS = ON,
            ALLOW_PAGE_LOCKS = ON
        ) ON [PRIMARY]
    ) ON [PRIMARY]
insert into NatijehHa
select ROW_NUMBER() OVER (
        Order by Module
    ) AS RowNumber,
    a.*
from (
        select distinct Module
        from [dbo].[TblLogInfo]
    ) as A
    /*
     SELECT top (21) a.LogInfoId Id
     ,a.Module Amal
     ,A.LogType KholasseAmaliat
     ,A.AdditionalData Tozihaat
     ,a.LogPriority  Olaviat
     ,A.Action  Natijeh
     ,  Agent
     ,  LogDateTime
     ,  Ip
     ,  FullName
     ,  Username
     ,  ProvinceId
     ,a.CountyId  CityId
     ,  LocationId
     FROM [SAMA2].[dbo].[TblLogInfo] A
     --  برای تبدیل --
     SELECT top (21) 
     CONCAT('{id: ', a.LogInfoId
     ,', Amal: ''',a.Module
     ,''', KholasseAmaliat: ',A.LogType 
     ,', Tozihaat: ''',A.AdditionalData 
     ,''', Olaviat: ' ,a.LogPriority  
     ,', Natijeh: ''' ,A.Action  
     ,''', Agent: ''',  Agent
     ,''', LogDateTime: ''',  LogDateTime
     ,''', Ip: ''',  Ip
     ,''', FullName: ''',  FullName
     ,''', Username: ''' ,  Username
     ,''', ProvinceId: '  ,  ISNULL(ProvinceId,0)
     ,', CityId: '  , ISNULL(a.CountyId,0)  
     ,', LocationId: '  ,  LocationId
     ,'},')
     FROM [SAMA2].[dbo].[TblLogInfo] A
     order by 1 desc
     */